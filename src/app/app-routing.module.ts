import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthenticationModule } from "@authentication/authentication.module";
import { AuthGuard } from "@authentication/guards/auth.guard";
import { RouterPath } from "./commons/enums/routers.enum";

const routes: Routes = [

  {
    path: RouterPath.CoursesPage,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import("./pages/courses-page/courses-page.module").then(m => m.CoursesPageModule)
  },
  {
    path: RouterPath.NotFoundPage,
    loadChildren: () => import("./pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule)
  },
  {
    path: RouterPath.LoginPage,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import("./pages/login-page/login-page.module").then(m => m.LoginPageModule)
  },


  { path: "", redirectTo: RouterPath.CoursesPage, pathMatch: "full" },

  {
    path: "**",
    loadChildren: () => import("./pages/not-found-page/not-found-page.module").then(m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    AuthenticationModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
