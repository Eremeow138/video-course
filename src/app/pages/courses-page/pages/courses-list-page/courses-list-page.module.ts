import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActionsComponent } from "./components/actions/actions.component";
import { CourseActionsComponent } from "./components/courses-list/course-card/course-actions/course-actions.component";
import { CourseCardComponent } from "./components/courses-list/course-card/course-card.component";
import { CoursesListComponent } from "./components/courses-list/courses-list.component";
import { CoursesListPageComponent } from "./components/courses-list-page.component";
import { CourseToolsComponent } from "./components/courses-list/course-card/course-tools/course-tools.component";
import { DurationPipe } from "./pipes/duration.pipe";
import { FiltersComponent } from "./components/filters/filters.component";
import { SearchComponent } from "./components/filters/search/search.component";
import { CourseHighlightDirective } from "./directives/course-highlight/course-highlight.directive";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { FilterPipe } from "./pipes/filter.pipe";

const COMPONENTS = [CoursesListPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FiltersComponent,
    SearchComponent,
    ActionsComponent,
    CoursesListComponent,
    CourseCardComponent,
    CourseToolsComponent,
    CourseActionsComponent,
    DurationPipe,
    CourseHighlightDirective,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [...COMPONENTS],
})
export class CoursesListPageModule { }
