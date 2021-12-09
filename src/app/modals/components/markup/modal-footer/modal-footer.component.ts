import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IModalButtonsText } from "@modals/interfaces/modals.interface";


@Component({
  selector: "app-modal-footer",
  templateUrl: "./modal-footer.component.html",
  styleUrls: ["./modal-footer.component.scss"]
})
export class ModalFooterComponent {

  @Input()
  public buttonsText: IModalButtonsText | null = null;

  @Output()
  private confirmEvent = new EventEmitter<void>();

  @Output()
  private cancelEvent = new EventEmitter<void>();

  public cancel(): void {
    this.cancelEvent.emit();
  }

  public confirm(): void {
    this.confirmEvent.emit();
  }

}
