import { Directive, Input } from "@angular/core";
import { IModalMetadata } from "@app/modals/interfaces/modals.interface";
import { ModalsService } from "@app/modals/services/modals/modals.service";

@Directive()
export abstract class AbstractModalComponent {

  @Input()
  public metadata!: IModalMetadata;

  constructor(protected modalService: ModalsService) { }

  hideModal(): void {
    this.modalService.hideModals();
  }
}
