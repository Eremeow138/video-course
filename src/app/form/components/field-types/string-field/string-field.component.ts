import { Component } from "@angular/core";
import { AbstractFieldComponent } from "../abstract-field/abstract-field.component";

@Component({
  selector: "app-string-field",
  templateUrl: "./string-field.component.html",
  styleUrls: ["./string-field.component.scss"],
})
export class StringFieldComponent extends AbstractFieldComponent { }

