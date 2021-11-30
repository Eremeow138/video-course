import { Injectable, Type } from "@angular/core";
import { AbstractModalComponent } from "@app/modals/components/modal-types/abstract-modal/abstract-modal.component";
import { ConfirmationModalComponent } from "@app/modals/components/modal-types/confirmation-modal/confirmation-modal.component";
import { ModalComponentEnum } from "@app/modals/enams/modal-component.enum";
import { ModalMapperComponentType } from "@app/modals/types/modal-mapper-component.type";

@Injectable({
  providedIn: "root"
})
export class ModalMapperService {

  private modalComponents: ModalMapperComponentType = {
    [ModalComponentEnum.Default]: ConfirmationModalComponent,
    [ModalComponentEnum.ConfirmationModal]: ConfirmationModalComponent
  };

  public getModalType(modalType: ModalComponentEnum): Type<AbstractModalComponent> {
    return this.modalComponents[modalType] || this.modalComponents.default;
  }
}
