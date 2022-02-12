import { Component } from "@angular/core";
import { Duration } from "@app/form/enums/duration.enum";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-duration-field",
  templateUrl: "./duration-field.component.html",
  styleUrls: ["./duration-field.component.scss"]
})
export class DurationFieldComponent extends AbstractFieldComponent {
  public minValue = Duration.MinValue;
  public maxValue = Duration.MaxValue;
}
