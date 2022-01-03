import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursesListPageModule } from "./pages/courses-list-page/courses-list-page.module";
import { MarkupModule } from "@markup/markup.module";

const COMPONENTS = [CoursesPageComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    CoursesListPageModule,
    MarkupModule
  ],
  exports: [...COMPONENTS]
})
export class CoursesPageModule { }
