import { Type } from "@angular/core";
import { AbstractModalComponent } from "@modals/components/modal-types/abstract-modal/abstract-modal.component";
import { ModalComponentEnum } from "@modals/enums/modal-component.enum";

export type ModalMapperComponentType = {
  [K in ModalComponentEnum]: Type<AbstractModalComponent>
};
