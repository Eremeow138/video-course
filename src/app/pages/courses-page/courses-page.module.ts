import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesPageComponent } from "./components/courses-page.component";
import { MarkupModule } from "@markup/markup.module";
import { CoursesPageRoutingModule } from "./courses-page-routing.module";
import { BreadcrumbService } from "@pages/courses-page/courses/services/breadcrumb/breadcrumb.service";
import { CoursesService } from "./courses/services/courses/courses.service";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";

const COMPONENTS = [CoursesPageComponent];

@NgModule({
  declarations: [...COMPONENTS, BreadcrumbsComponent],
  imports: [
    CommonModule,
    MarkupModule,
    CoursesPageRoutingModule
  ],
  providers: [
    CoursesService,
    BreadcrumbService
  ],
  exports: [...COMPONENTS]
})
export class CoursesPageModule { }
