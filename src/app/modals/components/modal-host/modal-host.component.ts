import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ModalHostDirective } from "@app/modals/directives/modal-host/modal-host.directive";
import { IModalData } from "@app/modals/interfaces/modals.interface";
import { ModalsService } from "@app/modals/services/modals/modals.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-modal-host",
  templateUrl: "./modal-host.component.html",
  styleUrls: ["./modal-host.component.scss"]
})
export class ModalHostComponent implements OnInit, OnDestroy {

  @ViewChild(ModalHostDirective) modalHostDirective: ModalHostDirective | null = null;

  public isOverlayVisible = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private modalsService: ModalsService
  ) { }

  ngOnInit(): void {
    this.subscribeToModals();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public showModal(data: IModalData): void {
    if (this.modalHostDirective) {
      this.isOverlayVisible = true;
      const modalFactory = this.factoryResolver.resolveComponentFactory(data.component);
      const viewContainerRef = this.modalHostDirective.viewContainerRef;
      viewContainerRef.clear();
      const modalComponent = viewContainerRef.createComponent(modalFactory);
      modalComponent.instance.metadata = data.metadata;
    }
  }

  public hideModals(): void {
    if (this.modalHostDirective) {
      const viewContainerRef = this.modalHostDirective.viewContainerRef;
      viewContainerRef.clear();
      this.isOverlayVisible = false;
    }
  }

  private subscribeToModals(): void {
    this.modalsService.showModal$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data: IModalData) => {
      this.showModal(data);
    });

    this.modalsService.hideModals$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.hideModals();
    });
  }

}

