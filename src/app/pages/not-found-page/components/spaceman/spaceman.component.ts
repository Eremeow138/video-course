import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-spaceman",
  templateUrl: "./spaceman.component.html",
  styleUrls: ["./spaceman.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacemanComponent { }
