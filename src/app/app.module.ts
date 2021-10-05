import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';
import { ActionsComponent } from './components/actions/actions.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseToolsComponent } from './components/course-tools/course-tools.component';
import { CourseActionsComponent } from './components/course-actions/course-actions.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { DurationPrettierPipe } from './pipes/duration-prettier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LogoComponent,
    BreadcrumbsComponent,
    FiltersComponent,
    SearchComponent,
    ActionsComponent,
    CoursesListComponent,
    CourseCardComponent,
    CourseToolsComponent,
    CourseActionsComponent,
    CoursesPageComponent,
    FooterComponent,
    DurationPrettierPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
