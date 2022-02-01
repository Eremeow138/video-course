import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { IBreadcrumb } from "@app/breadcrumbs/interfaces/breadcrumb.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService implements OnDestroy {

  private breadcrumbsSubject = new BehaviorSubject<IBreadcrumb[]>([]);

  get breadcrumbs$(): Observable<IBreadcrumb[]> {
    return this.breadcrumbsSubject.asObservable();
  }

  constructor(private router: Router) {
    this.subscribeToNavigationEvents();
  }

  public ngOnDestroy(): void {
    this.breadcrumbsSubject.complete();
  }

  private subscribeToNavigationEvents(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: IBreadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);

      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: IBreadcrumb[]): void {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: route.data.breadcrumb,
          url: "/" + routeUrl.join("/")
        };
        breadcrumbs.push(breadcrumb);
      }

      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

}
