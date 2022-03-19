import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { StringLimit } from "@app/form/enums/string-limit.enum";
import { StringFieldInputType } from "@app/form/types/string-field-input-type.type";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-string-field",
  templateUrl: "./string-field.component.html",
  styleUrls: ["./string-field.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringFieldComponent extends AbstractFieldComponent {
  @Input()
  public inputType: StringFieldInputType = "text";

  public maxLength = StringLimit.MaxLength;

  public get errors(): string[] {
    const errors: string[] = [];
    if (this.control && this.control.errors && this.control.errors.maxlength) {
      errors.push("The maximum number of characters has been exceeded");
    }
    return errors;
  }
}

