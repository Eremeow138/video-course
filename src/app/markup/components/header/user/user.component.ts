import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
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
    this.router.navigate([RouterPath.LoginPage]);
  }
}
