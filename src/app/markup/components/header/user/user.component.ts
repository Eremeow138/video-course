import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Paths } from "@commons/enums/paths.enum";
import { AuthService } from "@authentication/services/auth/auth.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  constructor(private authService: AuthService, private router: Router) { }

  public logout(): void {
    this.authService.logout();
    this.router.navigate([Paths.LoginPage]);
  }
}
