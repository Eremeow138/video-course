import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { MarkupModule } from './markup/markup.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonsModule, MarkupModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
