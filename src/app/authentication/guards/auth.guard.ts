import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { AuthService } from "@authentication/services/auth/auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  public canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    const currentUrl = segments.reduce((path, currentSegment) => {
      return path ? `${path}/${currentSegment.path}` : `${currentSegment.path}`;
    }, "");
    return this.checkAccess(currentUrl);
  }

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {

    return this.checkAccess(route.routeConfig.path);
  }

  public canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.checkAccess(route.routeConfig.path);
  }

  private checkAccess(currentPath: string): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      map(isAuth => this.determineAccessToPage(isAuth, currentPath))
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
