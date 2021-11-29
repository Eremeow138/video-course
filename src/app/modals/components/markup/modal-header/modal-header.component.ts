import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-modal-header",
  templateUrl: "./modal-header.component.html",
  styleUrls: ["./modal-header.component.scss"]
})
export class ModalHeaderComponent {

  @Input()
  public title!: string;

  @Output()
  private canelEvent = new EventEmitter<void>();

  public canel(): void {
    this.canelEvent.emit();
  }

}
