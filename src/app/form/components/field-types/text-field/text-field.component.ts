import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TextLimit } from "@app/form/enums/text-limit.enum";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent extends AbstractFieldComponent {
  public maxLength = TextLimit.MaxLength;

  public get errors(): string[] {
    const errors: string[] = [];
    if (this.control && this.control.errors && this.control.errors.maxlength) {
      errors.push("The maximum number of characters has been exceeded");
    }
    return errors;
  }
}
