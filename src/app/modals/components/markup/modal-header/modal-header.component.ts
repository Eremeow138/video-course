import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal-header",
  templateUrl: "./modal-header.component.html",
  styleUrls: ["./modal-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHeaderComponent {

  @Input()
  public title = "";

  @Output()
  private cancelEvent = new EventEmitter<void>();

  public cancel(): void {
    this.cancelEvent.emit();
  }

}
