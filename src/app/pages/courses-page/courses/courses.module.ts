import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesService } from "./services/courses/courses.service";
import { BreadcrumbService } from "./services/breadcrumb/breadcrumb.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CoursesService,
    BreadcrumbService
  ],
  exports: []
})
export class CoursesModule { }
