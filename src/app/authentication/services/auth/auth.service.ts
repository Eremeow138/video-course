import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  private readonly users = [
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
  private readonly localStorageUsernameKey = "username";

  private readonly localStorageTokenKey = "token";

  private readonly token = "secretToken";

  private authenticatedUsername = "";

  constructor() {
    this.tokenCheck();
  }

  public login(username: string, password: string): void {
    const user = this.users.find(currentUser => currentUser.username === username && currentUser.password === password);
    if (user) {
      localStorage.setItem(this.localStorageUsernameKey, user.username);
      localStorage.setItem(this.localStorageTokenKey, this.token);
      this.authenticatedUsername = user.username;
      console.log("logged in successfully");
    }
  }

  public logout(): void {
    localStorage.removeItem(this.localStorageUsernameKey);
    localStorage.removeItem(this.localStorageTokenKey);
    this.authenticatedUsername = "";
  }

  public isAuthenticated(): boolean {
    return !!this.authenticatedUsername;
  }

  public getUserInfo(): string {
    return this.authenticatedUsername;
  }

  private tokenCheck(): void {
    const token = localStorage.getItem(this.localStorageTokenKey);
    const username = localStorage.getItem(this.localStorageUsernameKey);
    if (token && username) {
      this.authenticatedUsername = username;
    } else {
      this.logout();
    }
  }
}
