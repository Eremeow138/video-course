import { Injectable, OnDestroy } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

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

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

  constructor() {
    this.tokenCheck();
  }

  ngOnDestroy() {
    this.isAuthenticatedSubject.complete();
  }

  public login(username: string, password: string): void {
    const user = this.users.find(currentUser => currentUser.username === username && currentUser.password === password);

    if (user) {
      localStorage.setItem(this.localStorageUsernameKey, user.username);
      localStorage.setItem(this.localStorageTokenKey, this.token);

      this.authenticatedUsername = user.username;
      this.isAuthenticatedSubject.next(true);
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  public logout(): void {
    localStorage.removeItem(this.localStorageUsernameKey);
    localStorage.removeItem(this.localStorageTokenKey);
    this.authenticatedUsername = "";
    this.isAuthenticatedSubject.next(false);
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  public getUserInfo(): string {
    return this.authenticatedUsername;
  }

  private tokenCheck(): void {
    const token = localStorage.getItem(this.localStorageTokenKey);
    const username = localStorage.getItem(this.localStorageUsernameKey);

    if (token && username) {
      this.authenticatedUsername = username;
      this.isAuthenticatedSubject.next(true);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.logout();
    }
  }
}
