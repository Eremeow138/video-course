import { Component } from "@angular/core";
import { IModalResultData } from "@modals/interfaces/modals.interface";
import { ModalsService } from "@modals/services/modals/modals.service";
import { AbstractModalComponent } from "@modals/components/modal-types/abstract-modal/abstract-modal.component";

@Component({
  selector: "app-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.scss"]
})
export class ConfirmationModalComponent extends AbstractModalComponent {

  constructor(modalService: ModalsService) {
    super(modalService);
  }

  confirm(): void {
    if (this.metadata) {
      const data: IModalResultData = {
        key: this.metadata.initialResult?.key,
        value: this.metadata.initialResult?.value
      };

      this.modalService.confirmModalValue(data);
    }
  }
}
