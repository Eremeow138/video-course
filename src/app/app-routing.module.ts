import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationModule } from "@authentication/authentication.module";
import { AuthGuard } from "@authentication/guards/auth.guard";
import { LoginPageComponent } from "@pages/login-page/components/login-page.component";
import { NotFoundPageComponent } from "@pages/not-found-page/components/not-found-page/not-found-page.component";
import { RouterPath } from "./commons/enums/routers.enum";
import { CoursesPageModule } from "./pages/courses-page/courses-page.module";

const routes: Routes = [

  {
    path: RouterPath.CoursesPage,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: (): Promise<CoursesPageModule> =>
      import("./pages/courses-page/courses-page.module").then(
        m => m.CoursesPageModule
      )
  },
  {
    path: RouterPath.LoginPage,
    canActivate: [AuthGuard],
    component: LoginPageComponent
  },

  { path: "", redirectTo: RouterPath.CoursesPage, pathMatch: "full" },

  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    AuthenticationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
