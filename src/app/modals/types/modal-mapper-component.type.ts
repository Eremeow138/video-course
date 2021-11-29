import { Type } from "@angular/core";
import { AbstractModalComponent } from "../components/modal-types/abstract-modal/abstract-modal.component";
import { ModalComponentEnum } from "../enams/modal-component.enum";

export type ModalMapperComponentType = {
  [K in ModalComponentEnum]: Type<AbstractModalComponent>
};
