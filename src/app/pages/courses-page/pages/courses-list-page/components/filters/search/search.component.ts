import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  public inputValue = "";

  @Output()
  private searchEvent = new EventEmitter<string>();

  public search(): void {
    this.searchEvent.emit(this.inputValue);
  }
}
