import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { Breadcrumb } from "@app/breadcrumbs/enums/breadcrumb.enum";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursePageComponent } from "./pages/course-page/components/course-page.component";
import { CoursesListPageComponent } from "./pages/courses-list-page/components/courses-list-page.component";

const routes: Routes = [
  {
    path: "",
    component: CoursesPageComponent,
    data: { breadcrumb: Breadcrumb.CoursesPage },
    children: [
      {
        path: RouterPath.CoursesListPage,
        component: CoursesListPageComponent,
        data: { breadcrumb: null }
      },
      {
        path: RouterPath.CourseCreationPage,
        component: CoursePageComponent,
        pathMatch: "full",
        data: { breadcrumb: Breadcrumb.CourseCreationPage }
      },
      {
        path: RouterPath.CourseEditPage,
        component: CoursePageComponent,
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
