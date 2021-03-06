import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {

  @Input()
  public value = "";

  @Output()
  private deleteEvent = new EventEmitter<string>();

  public delete(): void {
    this.deleteEvent.emit(this.value);
  }

}
