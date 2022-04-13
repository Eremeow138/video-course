import { Injectable, Type } from "@angular/core";
import { ConfirmationModalComponent } from "@modals/components/modal-types/confirmation-modal/confirmation-modal.component";
import { ModalComponent } from "@modals/enums/modal-component.enum";
import { ModalMapperComponentType } from "@modals/types/modal-mapper-component.type";
import { AbstractModalComponent } from "@modals/components/modal-types/abstract-modal/abstract-modal.component";

@Injectable({
  providedIn: "root"
})
export class ModalMapperService {

  private modalComponents: ModalMapperComponentType = {
    [ModalComponent.Default]: ConfirmationModalComponent,
    [ModalComponent.ConfirmationModal]: ConfirmationModalComponent
  };

  public getModalType(modalType: ModalComponent): Type<AbstractModalComponent> {
    return this.modalComponents[modalType] || this.modalComponents[ModalComponent.Default];
  }
}
