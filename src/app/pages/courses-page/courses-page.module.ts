import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { MarkupModule } from "@markup/markup.module";
import { CoursesPageRoutingModule } from "./courses-page-routing.module";
import { BreadcrumbService } from "@markup/services/breadcrumb/breadcrumb.service";

const COMPONENTS = [CoursesPageComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MarkupModule,
    CoursesPageRoutingModule
  ],
  providers: [BreadcrumbService],
  exports: [...COMPONENTS]
})
export class CoursesPageModule { }
