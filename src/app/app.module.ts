import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonsModule } from "./commons/commons.module";
import { MarkupModule } from "./markup/markup.module";
import { LoginPageModule } from "./pages/login-page/login-page.module";
import { CoursesPageModule } from "@pages/courses-page/courses-page.module";
import { ModalsModule } from "./modals/modals.module";
import { AuthenticationModule } from "./authentication/authentication.module";

import { AppComponent } from "./app.component";
import { NotFoundPageModule } from "@pages/not-found-page/not-found-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonsModule,
    AppRoutingModule,
    MarkupModule,
    CoursesPageModule,
    LoginPageModule,
    NotFoundPageModule,
    ModalsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
