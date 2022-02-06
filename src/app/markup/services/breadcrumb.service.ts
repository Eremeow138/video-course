import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { IBreadcrumb } from "@markup/interfaces/breadcrumb.interface";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService implements OnDestroy {

  private unsubscribe$ = new Subject<void>();

  private breadcrumbsSubject = new BehaviorSubject<IBreadcrumb[]>([]);

  get breadcrumbs$(): Observable<IBreadcrumb[]> {
    return this.breadcrumbsSubject.asObservable();
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subscribeToNavigationEvents();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.breadcrumbsSubject.complete();
  }

  private subscribeToNavigationEvents(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.createBreadcrumbs(this.route.snapshot);
    });
  }
  private createBreadcrumbs(route: ActivatedRouteSnapshot): void {
    const breadcrumbs: IBreadcrumb[] = [];
    this.addBreadcrumb(route.root, [], breadcrumbs);

    this.breadcrumbsSubject.next(breadcrumbs);
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
