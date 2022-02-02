import { Component, Input } from "@angular/core";
import { StringFieldInputType } from "@app/form/types/string-field-input-type.type";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-string-field",
  templateUrl: "./string-field.component.html",
  styleUrls: ["./string-field.component.scss"],
})
export class StringFieldComponent extends AbstractFieldComponent {
  @Input()
  public inputType: StringFieldInputType = "text";
}

