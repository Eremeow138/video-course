import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthService } from "@app/authentication/services/auth/auth.service";
import { Subject } from "rxjs";
import { skip, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public isVisibleWarning = false;

  public username = "";

  public password = "";

  private unsubscribe$ = new Subject<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscribeToAuthentication();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public login(): void {
    this.authService.login(this.username, this.password);
  }
  public hideWarning(): void {
    if (this.isVisibleWarning) {
      this.isVisibleWarning = false;
    }
  }

  private subscribeToAuthentication(): void {
    this.authService.isAuthenticated$.pipe(
      skip(1),
      takeUntil(this.unsubscribe$)
    ).subscribe(isAuthenticated => {
      this.isVisibleWarning = !isAuthenticated;
    });
  }
}
