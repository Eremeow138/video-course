import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursePageComponent } from "./components/course-page.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";
import { FormModule } from "@app/form/form.module";
import { ReactiveFormsModule } from "@angular/forms";

const COMPONENTS = [CoursePageComponent];

@NgModule({
  declarations: [...COMPONENTS, CourseFormComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS]
})
export class CoursePageModule { }
