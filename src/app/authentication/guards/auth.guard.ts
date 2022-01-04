import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree } from "@angular/router";
import { RouterPath } from "@commons/enums/router-path.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkPage(route);
  }

  public canActivateChild(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next);
  }

  private checkPage(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {

    const isLoginPath = route.routeConfig.path === RouterPath.LoginPage;

    return this.authService.isAuthenticated$.pipe(
      map(isAuth => {
        if (isAuth && isLoginPath) {
          return this.router.parseUrl(RouterPath.CoursesPage);
        }
        if (isAuth && !isLoginPath) {
          return true;
        }
        if (!isAuth && isLoginPath) {
          return true;
        }
        return this.router.parseUrl(RouterPath.LoginPage);
      })
    );
  }
}
