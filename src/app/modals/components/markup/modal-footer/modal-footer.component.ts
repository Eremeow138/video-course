import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IModalButtonsText } from "@app/modals/interfaces/modals.interface";

@Component({
  selector: "app-modal-footer",
  templateUrl: "./modal-footer.component.html",
  styleUrls: ["./modal-footer.component.scss"]
})
export class ModalFooterComponent {

  @Input()
  public buttonsText!: IModalButtonsText;

  @Output()
  private confirmEvent = new EventEmitter<void>();

  @Output()
  private canelEvent = new EventEmitter<void>();

  public canel(): void {
    this.canelEvent.emit();
  }

  public confirm(): void {
    this.confirmEvent.emit();
  }

}
