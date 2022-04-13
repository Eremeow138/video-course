import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesPageComponent } from "./components/courses-page.component";
import { MarkupModule } from "@markup/markup.module";
import { CoursesPageRoutingModule } from "./courses-page-routing.module";
import { BreadcrumbsComponent } from "./courses/components/breadcrumbs/breadcrumbs.component";
import { CoursesModule } from "./courses/courses.module";

const COMPONENTS = [CoursesPageComponent];

@NgModule({
  declarations: [...COMPONENTS, BreadcrumbsComponent],
  imports: [
    CommonModule,
    MarkupModule,
    CoursesModule,
    CoursesPageRoutingModule
  ],
  exports: [...COMPONENTS]
})
export class CoursesPageModule { }
