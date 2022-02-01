import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursesListPageModule } from "./pages/courses-list-page/courses-list-page.module";
import { MarkupModule } from "@markup/markup.module";
import { CoursePageModule } from "./pages/course-page/course-page.module";
import { CoursesPageRoutingModule } from "./courses-page-routing.module";
import { BreadcrumbsModule } from "@app/breadcrumbs/breadcrumbs.module";

const COMPONENTS = [CoursesPageComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    CoursesListPageModule,
    CoursePageModule,
    MarkupModule,
    BreadcrumbsModule,
    CoursesPageRoutingModule
  ],
  exports: [...COMPONENTS]
})
export class CoursesPageModule { }
