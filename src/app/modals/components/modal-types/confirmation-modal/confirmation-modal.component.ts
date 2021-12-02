import { Component } from "@angular/core";
import { IModalResultData } from "@app/modals/interfaces/modals.interface";
import { ModalsService } from "@app/modals/services/modals/modals.service";
import { AbstractModalComponent } from "../abstract-modal/abstract-modal.component";

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
    const data: IModalResultData = {
      key: this.metadata.initialResult?.key,
      value: this.metadata.initialResult?.value
    };

    this.modalService.confirmModalValue(data);
  }
}
