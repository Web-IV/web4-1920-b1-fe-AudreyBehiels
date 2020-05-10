import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split(".")[1];
  const base64 = base64Token.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private readonly _tokenKey = "currentUser";
  private _user$: BehaviorSubject<string>;
  public redirectUrl: string = null;
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      parsedToken && parsedToken.unique_name
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : "";
  }

  login(mailadres: string, wachtwoord: string): Observable<boolean> {
    return this.http
      .post(
        `${environment.apiUrl}/account`,
        { mailadres, wachtwoord },
        { responseType: "text" }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(mailadres);
            this.isLoggedIn = true;
            return true;
          } else {
            return false;
          }
        })
      );
  }

  registreer(
    voornaam: string,
    familienaam: string,
    mailadres: string,
    wachtwoord: string
  ): Observable<boolean> {
    return this.http
      .post(
        `${environment.apiUrl}/Account/registreer`,
        {
          voornaam,
          familienaam,
          mailadres,
          wachtwoord,
          wachtwoordBevestiging: wachtwoord,
        },
        { responseType: "text" }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(mailadres);
            this.isLoggedIn = true;
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem("currentUser");
      this._user$.next(null);
      this.isLoggedIn = false;
    }
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiUrl}/account/checkusername`,
      {
        params: { email },
      }
    );
  };
}
