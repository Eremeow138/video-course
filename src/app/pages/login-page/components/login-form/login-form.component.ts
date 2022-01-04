import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginFormControl } from "@app/form/enums/login-form-control.enum";
import { LoginForm } from "@app/form/models/login-form.model";
import { RouterPath } from "@commons/enums/router-path.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Subject } from "rxjs";
import { skip, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public isVisibleWarning = false;

  public emailFormControlName = LoginFormControl.Email;
  public passwordFormControlName = LoginFormControl.Password;

  public loginForm = new LoginForm().createForm({
    [LoginFormControl.Email]: "",
    [LoginFormControl.Password]: ""
  });

  private unsubscribe$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.subscribeToAuthentication();
    this.subscribeToFormControls();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public login(): void {
    this.authService.login(this.loginForm.getRawValue());
  }

  public hideWarning(): void {
    if (this.isVisibleWarning) {
      this.isVisibleWarning = false;
    }
  }

  private navigateToHomePage(isAuthenticated: boolean): void {
    if (isAuthenticated) {
      this.router.navigate([RouterPath.CoursesPage]);
    }
  }

  private subscribeToAuthentication(): void {
    this.authService.isAuthenticated$.pipe(
      skip(1),
      takeUntil(this.unsubscribe$)
    ).subscribe(isAuthenticated => {
      this.isVisibleWarning = !isAuthenticated;
      this.navigateToHomePage(isAuthenticated);
    });
  }

  private subscribeToFormControls(): void {
    this.loginForm.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.hideWarning();
    });
  }
}
