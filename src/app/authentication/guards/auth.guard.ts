import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree } from "@angular/router";
import { RouterPath } from "@commons/enums/router-path.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, OnDestroy {

  private isAuthenticated = false;

  private unsubscribe$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.subscribeToAuthentication();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public canActivate(route: ActivatedRouteSnapshot,): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoginPath = route.routeConfig.path === RouterPath.LoginPage;

    if (this.isAuthenticated && isLoginPath) {
      return this.router.parseUrl(RouterPath.CoursesPage);
    }

    if (this.isAuthenticated && !isLoginPath) {
      return true;
    }

    if (!this.isAuthenticated && isLoginPath) {
      return true;
    }

    return this.router.parseUrl(RouterPath.LoginPage);
  }

  public canActivateChild(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next);
  }

  private subscribeToAuthentication(): void {
    this.authService.isAuthenticated$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
