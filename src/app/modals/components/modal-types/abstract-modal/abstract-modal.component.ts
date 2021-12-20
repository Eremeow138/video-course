import { Directive, Input } from "@angular/core";
import { IModalMetadata } from "@modals/interfaces/modals.interface";
import { ModalsService } from "@modals/services/modals/modals.service";

@Directive()
export abstract class AbstractModalComponent {

  @Input()
  public metadata: IModalMetadata | null = null;

  constructor(protected modalService: ModalsService) { }

  hideModal(): void {
    this.modalService.hideModals();
  }
}
