import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { HttpErrorResponse } from "@angular/common/http";

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const wachtwoord = control.get("wachtwoord");
  const confirmPassword = control.get("confirmPassword");
  return wachtwoord.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMessage: string = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      mailadres: ["", Validators.required],
      wachtwoord: ["", Validators.required],
    });
    
  }
  onSubmit() {
    this.authService
      .login(this.user.value.mailadres, this.user.value.wachtwoord)
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
            this.errorMessage = `Kan niet inloggen`;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMessage = `Fout bij het inloggen van gebruiker ${this.user.value.mailadres}: ${err.error.message}`;
          } else {
            this.errorMessage = `Fout ${err.status} bij het proberen inloggen van gebruiker ${this.user.value.mailadres}: ${err.error}`;
          }
        }
      );
  }
}
