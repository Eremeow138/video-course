import { Component } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent {
  public inputValue = "";

  public search(): void {
    console.log(this.inputValue);
  }
}
