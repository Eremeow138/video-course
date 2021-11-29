import { Type } from "@angular/core";
import { AbstractModalComponent } from "../components/modal-types/abstract-modal/abstract-modal.component";

export interface IModalData {
  component: Type<AbstractModalComponent>;
  metadata: IModalMetadata;
}

export interface IModalMetadata {
  title: string;
  text: string[];
  initialResult?: IModalResultData;
  buttonsText: IModalButtonsText;
}

export interface IModalResultData {
  value: any;
  key?: any;
}

export interface IModalButtonsText {
  confirm?: string;
  canel?: string;
}
