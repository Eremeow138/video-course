import { Component } from "@angular/core";
import { AuthService } from "@app/authentication/services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

  public isSuccessfulLogin = true;

  public username = "";

  public password = "";

  constructor(private auth: AuthService) { }

  public login(): void {
    this.auth.login(this.username, this.password);
    this.isSuccessfulLogin = this.auth.isAuthenticated();
  }
}
