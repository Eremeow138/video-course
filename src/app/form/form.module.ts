import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonsModule } from "@commons/commons.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FieldComponent } from "./components/field/field.component";
import { StringFieldComponent } from "./components/field-types/string-field/string-field.component";
import { TextFieldComponent } from "./components/field-types/text-field/text-field.component";
import { DurationFieldComponent } from "./components/field-types/duration-field/duration-field.component";

import { TagFieldComponent } from "./components/field-types/tag-field/tag-field.component";
import { DateFieldComponent } from "./components/field-types/date-field/date-field.component";
import { TagComponent } from "./components/field-types/tag-field/tag/tag.component";
import { IntegerOnlyDirective } from "./directives/integer-only/integer-only.directive";
import { InvalidDateHandlerDirective } from "./directives/invalid-date-handler/invalid-date-handler.directive";

const COMPONENTS = [StringFieldComponent, TextFieldComponent, DurationFieldComponent, DateFieldComponent, TagFieldComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FieldComponent,
    TagComponent,
    IntegerOnlyDirective,
    InvalidDateHandlerDirective
  ],
  imports: [
    CommonModule,
    CommonsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    ...COMPONENTS,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
