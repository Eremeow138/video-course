import { Component } from "@angular/core";
import { AuthService } from "@authentication/services/auth/auth.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  constructor(private authService: AuthService) { }

  public logout(): void {
    this.authService.logout();
  }
}
