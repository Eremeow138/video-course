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
  public control: AbstractControl = null;

  @Input()
  public id = "";

  @Input()
  public isRequired = false;

}
