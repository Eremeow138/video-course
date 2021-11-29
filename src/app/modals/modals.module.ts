import { NgModule } from "@angular/core";

import { ModalsService } from "./services/modals/modals.service";
import { ModalMapperService } from "./services/modal-mapper/modal-mapper.service";

import { ModalHostComponent } from "./components/modal-host/modal-host.component";
import { ModalFooterComponent } from "./components/markup/modal-footer/modal-footer.component";
import { ModalHeaderComponent } from "./components/markup/modal-header/modal-header.component";
import { ConfirmationModalComponent } from "./components/modal-types/confirmation-modal/confirmation-modal.component";

import { ModalHostDirective } from "./directives/modal-host/modal-host.directive";

import { CommonModule } from "@angular/common";

const SERVICES = [
  ModalsService,
  ModalMapperService
];

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
  ],
  imports: [...IMPORTS],
  entryComponents: [...MODALS],
  providers: [...SERVICES],
  exports: [...EXTERNAL_API]
})
export class ModalsModule { }
