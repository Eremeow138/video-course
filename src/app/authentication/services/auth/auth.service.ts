import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {
  private users = [
    {
      email: "admin@vc.com",
      password: "admin",
      role: "admin"
    },
    {
      email: "user@vc.com",
      password: "user",
      role: "user"
    },
  ];
  private localStorageEmailKey = "email";

  private localStorageTokenKey = "token";

  private token = "secretToken";

  private authenticatedUserEmail = "";

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  constructor() {
    this.checkToken();
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubject.complete();
  }

  public login(loginData: { email: string; password: string }): void {
    const user = this.users.find(currentUser => currentUser.email === loginData.email && currentUser.password === loginData.password);

    if (user) {
      this.setEmailAndTokenToLocalStorage(user.email, this.token);
      this.authenticatedUserEmail = user.email;
    }
    this.isAuthenticatedSubject.next(!!user);
  }

  public logout(): void {
    this.clearLocalStorage();
    this.authenticatedUserEmail = "";
    this.isAuthenticatedSubject.next(false);
  }

  public getUserInfo(): string {
    return this.authenticatedUserEmail;
  }

  private checkToken(): void {
    const token = this.getTokenFromLocalStorage();
    const email = this.getEmailFromLocalStorage();

    if (token && email) {
      this.authenticatedUserEmail = email;
      this.isAuthenticatedSubject.next(true);
      return;
    }
    this.logout();
  }

  private setEmailAndTokenToLocalStorage(email: string, token: string = this.token): void {
    localStorage.setItem(this.localStorageEmailKey, email);
    localStorage.setItem(this.localStorageTokenKey, token);
  }

  private clearLocalStorage(): void {
    localStorage.removeItem(this.localStorageEmailKey);
    localStorage.removeItem(this.localStorageTokenKey);
  }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(this.localStorageTokenKey);
  }
  private getEmailFromLocalStorage(): string | null {
    return localStorage.getItem(this.localStorageEmailKey);
  }
}
