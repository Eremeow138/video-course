import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { MarkupModule } from './markup/markup.module';
import { CoursesListPageModule } from './pages/courses-page/pages/courses-list-page/courses-list-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonsModule,
    AppRoutingModule,
    MarkupModule,
    CoursesListPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
