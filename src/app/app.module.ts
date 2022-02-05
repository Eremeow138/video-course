import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonsModule } from "./commons/commons.module";
import { MarkupModule } from "./markup/markup.module";
import { LoginPageModule } from "./pages/login-page/login-page.module";
import { ModalsModule } from "./modals/modals.module";
import { AuthenticationModule } from "./authentication/authentication.module";

import { AppComponent } from "./app.component";
import { NotFoundPageModule } from "@pages/not-found-page/not-found-page.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { CustomRouteReuseStrategy } from "@app/custom-route-reuse-strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonsModule,
    AppRoutingModule,
    MarkupModule,
    LoginPageModule,
    NotFoundPageModule,
    ModalsModule,
    AuthenticationModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy,
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
