import { Component, OnInit } from "@angular/core";
import { AuthService } from "@app/authentication/services/auth/auth.service";
import { skip } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  public isVisibleWarning = false;

  public username = "";

  public password = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated$.pipe(
      skip(1)
    ).subscribe(isAuthenticated => {
      this.isVisibleWarning = !isAuthenticated;
    });
  }

  public login(): void {
    this.authService.login(this.username, this.password);
  }
  public hideWarning(): void {
    if (this.isVisibleWarning) {
      this.isVisibleWarning = false;
    }
  }
}
