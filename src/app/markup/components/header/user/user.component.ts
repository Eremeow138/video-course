import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  public userName$: Observable<string>;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.userName$ = this.authService.getUserInfo().pipe(
      map(userInfo => `${userInfo.name.first} ${userInfo.name.last}`)
    );
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate([RouterPath.LoginPage]);
  }
}
