import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { Breadcrumb } from "@markup/enums/breadcrumb.enum";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";

const routes: Routes = [
  {
    path: "",
    component: CoursesPageComponent,
    data: { breadcrumb: Breadcrumb.CoursesPage },
    children: [
      {
        path: RouterPath.CoursesListPage,
        pathMatch: "full",
        loadChildren: () =>
          import("./pages/courses-list-page/courses-list-page.module").then(
            m => m.CoursesListPageModule
          ),
        data: { breadcrumb: null }
      },
      {
        path: RouterPath.CourseCreationPage,
        loadChildren: () =>
          import("./pages/course-page/course-page.module").then(
            m => m.CoursePageModule
          ),
        data: { breadcrumb: Breadcrumb.CourseCreationPage }
      },
      {
        path: RouterPath.CourseEditPage,
        loadChildren: () =>
          import("./pages/course-page/course-page.module").then(
            m => m.CoursePageModule
          ),
        data: { breadcrumb: Breadcrumb.CourseEditPage }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule { }
