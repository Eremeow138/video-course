import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";

import { CommonsModule } from "./commons/commons.module";
import { MarkupModule } from "./markup/markup.module";
import { ModalsModule } from "./modals/modals.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { CustomRouteReuseStrategy } from "@app/custom-route-reuse-strategy";
import { LoaderModule } from "./loader/loader.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth/auth.interceptor";
import { LoaderInterceptor } from "./interceptors/loader/loader.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonsModule,
    AppRoutingModule,
    MarkupModule,
    ModalsModule,
    LoaderModule,
    AuthenticationModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
