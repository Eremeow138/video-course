import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnDestroy {
  private users = [
    {
      username: "admin",
      password: "admin",
      role: "admin"
    },
    {
      username: "user",
      password: "user",
      role: "user"
    },
  ];
  private localStorageUsernameKey = "username";

  private localStorageTokenKey = "token";

  private token = "secretToken";

  private authenticatedUsername = "";

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
    const user = this.users.find(currentUser => currentUser.username === loginData.email && currentUser.password === loginData.password);

    if (user) {
      this.setUsernameAndTokenToLocalStorage(user.username, this.token);
      this.authenticatedUsername = user.username;
    }
    this.isAuthenticatedSubject.next(!!user);
  }

  public logout(): void {
    this.clearLocalStorage();
    this.authenticatedUsername = "";
    this.isAuthenticatedSubject.next(false);
  }

  public getUserInfo(): string {
    return this.authenticatedUsername;
  }

  private checkToken(): void {
    const token = this.getTokenFromLocalStorage();
    const username = this.getUsernameFromLocalStorage();

    if (token && username) {
      this.authenticatedUsername = username;
      this.isAuthenticatedSubject.next(true);
      return;
    }
    this.logout();
  }

  private setUsernameAndTokenToLocalStorage(username: string, token: string = this.token): void {
    localStorage.setItem(this.localStorageUsernameKey, username);
    localStorage.setItem(this.localStorageTokenKey, token);
  }

  private clearLocalStorage(): void {
    localStorage.removeItem(this.localStorageUsernameKey);
    localStorage.removeItem(this.localStorageTokenKey);
  }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem(this.localStorageTokenKey);
  }
  private getUsernameFromLocalStorage(): string | null {
    return localStorage.getItem(this.localStorageUsernameKey);
  }
}
