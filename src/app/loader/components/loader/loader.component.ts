import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  public isVisible = false;

}
