import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './courses-page/actions/actions.component';
import { CourseActionsComponent } from './courses-page/courses-list/course-card/course-actions/course-actions.component';
import { CourseCardComponent } from './courses-page/courses-list/course-card/course-card.component';
import { CoursesListComponent } from './courses-page/courses-list/courses-list.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseToolsComponent } from './courses-page/courses-list/course-card/course-tools/course-tools.component';
import { DurationPipe } from './courses-page/courses-list/course-card/course-tools/pipes/duration.pipe';
import { FiltersComponent } from './courses-page/filters/filters.component';
import { SearchComponent } from './courses-page/filters/search/search.component';

@NgModule({
  declarations: [
    FiltersComponent,
    SearchComponent,
    ActionsComponent,
    CoursesListComponent,
    CourseCardComponent,
    CourseToolsComponent,
    CourseActionsComponent,
    CoursesPageComponent,
    DurationPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CoursesPageComponent],
})
export class PagesModule {}
