import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";
import { CoursesListPageComponent } from "@pages/courses-page/pages/courses-list-page/components/courses-list-page.component";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.getKey(route) === CoursesListPageComponent.toString();

  }

  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRoutes.set(this.getKey(route), handle);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.storedRoutes.get(this.getKey(route));
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.storedRoutes.get(this.getKey(route));
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getKey(route: ActivatedRouteSnapshot): string {
    if (route.component) {
      return route.component.toString();
    }
    return route.firstChild.toString();
  }
}
