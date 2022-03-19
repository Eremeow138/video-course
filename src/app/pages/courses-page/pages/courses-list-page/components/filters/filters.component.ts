import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Output()
  private searchEvent = new EventEmitter<string>();

  constructor() { }

  public search(event: string): void {
    this.searchEvent.emit(event);
  }
}
