import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { FieldLengthModificatorType } from "@app/form/types/field-length-modificator.type";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.scss"]
})
export class FieldComponent {
  @Input()
  public title = "";

  @Input()
  public control: AbstractControl = null;

  @Input()
  public id = "";

  @Input()
  public isRequired = false;

  @Input()
  public fieldErrors: string[] = null;

  @Input()
  public lengthModificator: FieldLengthModificatorType = null;

  public get fieldLimitModificatorClass(): string {
    return this.lengthModificator ? `field__limit--${this.lengthModificator}` : "";
  }

  public get isRequiredVisible(): boolean {
    return !this.isControlValueExist && this.isRequired && this.control.invalid && this.control.touched;
  }

  private get isControlValueExist(): boolean {
    if (Array.isArray(this.control.value)) {
      return !!this.control.value.length;
    }
    return !!this.control.value;
  }
}
