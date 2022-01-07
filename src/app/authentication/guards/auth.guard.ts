import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, UrlTree } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkAccess(route);
  }

  public canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route);
  }

  private checkAccess(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      map(isAuth => this.determineAccessToPage(isAuth, route.routeConfig.path))
    );
  }

  private determineAccessToPage(isAuth: boolean, currentPath: string): boolean | UrlTree {
    const isLoginPath = currentPath === RouterPath.LoginPage;
    if (isAuth && isLoginPath) {
      return this.router.parseUrl(RouterPath.CoursesPage);
    }
    if (!isAuth && !isLoginPath) {
      return this.router.parseUrl(RouterPath.LoginPage);
    }
    return true;
  }
}
