import { Directive, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive()
export abstract class AbstractFieldComponent {

  @Input()
  public fieldName = "";
  @Input()
  public title = "";
  @Input()
  public placeholder = "";
  @Input()
  public control: FormControl = null;

  public get isRequired(): boolean {
    if (!this.control.validator) {
      return false;
    }
    const validator = this.control.validator({} as FormControl);
    return !!(validator && validator.required);
  }

}
