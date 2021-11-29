import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonsModule } from "./commons/commons.module";
import { MarkupModule } from "./markup/markup.module";
import { CoursesListPageModule } from "./pages/courses-page/pages/courses-list-page/courses-list-page.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { LoginPageModule } from "./pages/login-page/login-page.module";
import { ModalsModule } from "./modals/modals.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonsModule,
    AppRoutingModule,
    MarkupModule,
    CoursesListPageModule,
    LoginPageModule,
    AuthenticationModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
