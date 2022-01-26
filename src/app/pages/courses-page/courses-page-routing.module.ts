import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursePageComponent } from "./pages/course-page/components/course-page.component";
import { CoursesListPageComponent } from "./pages/courses-list-page/components/courses-list-page.component";

const routes: Routes = [
  {
    path: "",
    component: CoursesPageComponent,
    children: [
      {
        path: RouterPath.CoursesListPage,
        component: CoursesListPageComponent,
      },
      {
        path: RouterPath.CourseCreationPage,
        component: CoursePageComponent,
      },
      {
        path: RouterPath.CourseEditPage,
        component: CoursePageComponent,
      },
      {
        path: "",
        redirectTo: RouterPath.CoursesListPage,
        pathMatch: "full",
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule { }
