import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "@app/authentication/services/auth/auth.service";
import { Subject } from "rxjs";
import { distinctUntilChanged, takeUntil } from "rxjs/operators";

@Directive({
  selector: "[appIfAuthenticated]"
})
export class IfAuthenticatedDirective implements OnDestroy {

  private unsubscribe$ = new Subject<void>();

  private condition = false;

  @Input() set appIfAuthenticated(condition: boolean) {
    this.condition = condition;
    this.subscribeToAuthentication();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private showOrHide(isAuthenticated: boolean): void {
    if (this.condition && isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!this.condition && isAuthenticated) {
      this.viewContainer.clear();
    } else if (this.condition && !isAuthenticated) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private subscribeToAuthentication(): void {
    this.authService.isAuthenticated$.pipe(
      takeUntil(this.unsubscribe$),
      distinctUntilChanged()
    ).subscribe(isAuthenticated => {
      this.showOrHide(isAuthenticated);
    });
  }
}
