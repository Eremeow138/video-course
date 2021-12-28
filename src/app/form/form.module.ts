import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StringFieldComponent } from "./components/string-field/string-field.component";
import { FieldComponent } from "./components/field/field.component";
import { ReactiveFormsModule } from "@angular/forms";

const COMPONENTS = [StringFieldComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS]
})
export class FormModule { }
