import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
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

  public loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

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
    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
  }

  public hideWarning(): void {
    if (this.isVisibleWarning) {
      this.isVisibleWarning = false;
    }
  }
  public hasRequiredField = (abstractControl: AbstractControl): boolean => {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  };

  private subscribeToAuthentication(): void {
    this.authService.isAuthenticated$.pipe(
      skip(1),
      takeUntil(this.unsubscribe$)
    ).subscribe(isAuthenticated => {
      this.isVisibleWarning = !isAuthenticated;
    });
  }
}
