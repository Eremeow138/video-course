import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonsModule } from "@commons/commons.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { FieldComponent } from "./components/field/field.component";
import { StringFieldComponent } from "./components/field-types/string-field/string-field.component";
import { TextFieldComponent } from "./components/field-types/text-field/text-field.component";
import { DurationFieldComponent } from "./components/field-types/duration-field/duration-field.component";
import { DatepickerFieldComponent } from "./components/field-types/datepicker-field/datepicker-field.component";
import { TagFieldComponent } from "./components/field-types/tag-field/tag-field.component";

const COMPONENTS = [StringFieldComponent, TextFieldComponent, DurationFieldComponent, DatepickerFieldComponent, TagFieldComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FieldComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [...COMPONENTS]
})
export class FormModule { }
