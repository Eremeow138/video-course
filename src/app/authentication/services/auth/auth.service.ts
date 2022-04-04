import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { ILoginData, IToken } from "@authentication/interfaces/login-data";
import { IUser } from "@authentication/interfaces/user.interface";
import { urls } from "@environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {

  private localStorageTokenKey = "token";

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubject.complete();
  }

  public getToken(loginData: ILoginData): Observable<IToken> {
    return this.http.post<IToken>(urls.login, loginData);
  }

  public login(loginData: ILoginData): void {

    this.getToken(loginData).subscribe(
      date => {
        this.setTokenToLocalStorage(date.token);
        this.isAuthenticatedSubject.next(true);
      },
      (error: HttpErrorResponse) => {
        if (error.status >= 400 && error.status < 500) {
          this.isAuthenticatedSubject.next(false);
        } else {
          throw new Error(error.message);
        }
      }
    );
  }

  public logout(): void {
    this.clearLocalStorage();
    this.isAuthenticatedSubject.next(false);
  }

  public getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(this.localStorageTokenKey);
  }

  public getUserInfo(): Observable<IUser>{
    const token = this.getTokenFromLocalStorage();
    return this.http.post<IUser>(urls.userinfo, { token });
  }

  private checkToken(): void {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      this.isAuthenticatedSubject.next(true);
      return;
    }
    this.logout();
  }

  private setTokenToLocalStorage(token: string): void {
    localStorage.setItem(this.localStorageTokenKey, token);
  }

  private clearLocalStorage(): void {
    localStorage.removeItem(this.localStorageTokenKey);
  }

}
