import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationModule } from "@authentication/authentication.module";
import { AuthGuard } from "@authentication/guards/auth.guard";
import { CoursesPageComponent } from "@pages/courses-page/components/courses-page/courses-page.component";
import { LoginPageComponent } from "@pages/login-page/components/login-page.component";
import { RouterPath } from "./commons/enums/router-path.enum";

const routes: Routes = [

  {
    path: RouterPath.CoursesPage,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: CoursesPageComponent
  },
  {
    path: RouterPath.LoginPage,
    canActivate: [AuthGuard],
    component: LoginPageComponent
  },

  { path: "", redirectTo: RouterPath.CoursesPage, pathMatch: "full" },

  { path: "**", redirectTo: RouterPath.CoursesPage },
];

@NgModule({
  imports: [
    AuthenticationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
