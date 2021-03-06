import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ModalsService } from "@modals/services/modals/modals.service";
import { AbstractModalComponent } from "@modals/components/modal-types/abstract-modal/abstract-modal.component";

@Component({
  selector: "app-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent extends AbstractModalComponent {

  constructor(modalService: ModalsService) {
    super(modalService);
  }

  confirm(): void {
    this.modalService.confirmModalValue(this.metadata);
  }
}
