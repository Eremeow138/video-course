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

  public get errors(): string[] {
    const errors: string[] = [];
    if (this.control && this.control.errors && (this.control.errors.max || this.control.errors.pattern)) {
      errors.push("The maximum allowable value has been exceeded");
    }
    if (this.control && this.control.errors && this.control.errors.min) {
      errors.push("The minimum allowable value has been exceeded");
    }
    if (this.control && this.control.errors && this.control.errors.pattern && !this.control.errors.max) {
      errors.push("Not an integer has been entered");
    }
    return errors;
  }
}
