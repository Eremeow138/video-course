import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationModule } from "@authentication/authentication.module";
import { AuthGuard } from "@authentication/guards/auth.guard";
import { CoursesPageComponent } from "@pages/courses-page/components/courses-page/courses-page.component";
import { LoginPageComponent } from "@pages/login-page/components/login-page.component";
import { Paths } from "./commons/enums/paths.enum";

const routes: Routes = [

  {
    path: Paths.CoursesPage,
    canActivate: [AuthGuard],
    component: CoursesPageComponent
  },
  {
    path: Paths.LoginPage,
    canActivate: [AuthGuard],
    component: LoginPageComponent
  },

  { path: "", redirectTo: Paths.CoursesPage, pathMatch: "full" },

  { path: "**", redirectTo: Paths.CoursesPage },
];

@NgModule({
  imports: [
    AuthenticationModule,
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
