import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.scss"]
})
export class FieldComponent {
  @Input()
  public title = "";

  @Input()
  public field: AbstractControl = null;

  @Input()
  public id = "";

  get isRequired(): boolean {
    if (!this.field.validator) {
      return false;
    }
    const validator = this.field.validator({} as AbstractControl);
    return !!(validator && validator.required);
  }
}
