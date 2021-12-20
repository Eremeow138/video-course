import { NgModule } from "@angular/core";

import { ModalHostComponent } from "./components/modal-host/modal-host.component";
import { ModalFooterComponent } from "./components/markup/modal-footer/modal-footer.component";
import { ModalHeaderComponent } from "./components/markup/modal-header/modal-header.component";
import { ConfirmationModalComponent } from "./components/modal-types/confirmation-modal/confirmation-modal.component";

import { ModalHostDirective } from "./directives/modal-host/modal-host.directive";

import { CommonModule } from "@angular/common";

import { StringToStringArrayPipe } from "./pipes/string-to-string-array/string-to-string-array.pipe";

const EXTERNAL_API = [
  ModalHostDirective,
  ModalHostComponent
];

const MODALS = [
  ConfirmationModalComponent
];

const IMPORTS = [
  CommonModule
];

@NgModule({
  declarations: [
    ...EXTERNAL_API,
    ...MODALS,
    ModalFooterComponent,
    ModalHeaderComponent,
    StringToStringArrayPipe,
  ],
  imports: [...IMPORTS],
  entryComponents: [...MODALS],
  exports: [...EXTERNAL_API]
})
export class ModalsModule { }
