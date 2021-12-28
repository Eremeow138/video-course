import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";


@Component({
  selector: "app-string-field",
  templateUrl: "./string-field.component.html",
  styleUrls: ["./string-field.component.scss"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StringFieldComponent),
    multi: true,
  }],
})
export class StringFieldComponent extends AbstractFieldComponent { }
