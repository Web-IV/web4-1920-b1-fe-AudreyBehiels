import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (!control.value) {
      return null;
    }

    // test the value of the control against the regexp supplied
    const valid = regex.test(control.value);
    // if true, return no error (no error), else return error passed in the second parameter
    return valid ? null : error;
  };
}

function comparePasswords(control: AbstractControl): ValidationErrors {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");
  return password.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return checkAvailabilityFn(control.value).pipe(
      map((available) => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMessage: string = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email],
        ,
        serverSideValidateUsername(this.authService.checkUserNameAvailability),
      ],
      passwordGroup: this.fb.group(
        {
          password: [
            "",
            [
              Validators.required,
              Validators.minLength(8),
              patternValidator(/\d/, { hasNumber: true }),
              patternValidator(/[A-Z]/, { hasUpperCase: true }),
              patternValidator(/[a-z]/, { hasLowerCase: true }),
            ],
          ],
          confirmPassword: ["", Validators.required],
        },
        { validator: comparePasswords }
      ),
    });
  }

  onSubmit() {
    this.authService
      .registreer(
        this.user.value.firstname,
        this.user.value.lastname,
        this.user.value.email,
        this.user.value.passwordGroup.password
      )
      .subscribe(
        (waarde) => {
          if (waarde) {
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(["/films/lijst"]);
            }
          } else {
            this.errorMessage = `kan zich niet registreren`;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMessage = `Fout bij het registreren van ${this.user.value.email}: ${err.error.message}`;
          } else {
            this.errorMessage = `fout ${err.status} bij het proberen registreren van ${this.user.value.email}: ${err.error}`;
          }
        }
      );
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return "is verplicht";
    } else if (errors.minlength) {
      return `Er moeten ten minste ${errors.minlength.requiredLength} karakters in zitten (heeft er ${errors.minlength.actualLength})`;
    } else if (errors.hasNumber) {
      return `Er moet mistens 1 nummer in zitten`;
    } else if (errors.hasUpperCase) {
      return `Er moet mistens 1 hoofletter in zitten`;
    } else if (errors.hasNumber) {
      return `Er moet mistens 1 kleine letter in zitten`;
    } else if (errors.userAlreadyExists) {
      return `Gebruiker bestaat al`;
    } else if (errors.email) {
      return `Geen geldig mailadres`;
    } else if (errors.passwordsDiffer) {
      return `Wachtwoorden zijn niet hetzelfde`;
    }
  }
}
