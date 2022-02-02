import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { ICourse } from "@pages/courses-page/courses/interfaces/course.interface";
import { CoursesService } from "@pages/courses-page/courses/services/courses.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-course-page",
  templateUrl: "./course-page.component.html",
  styleUrls: ["./course-page.component.scss"]
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public course: ICourse = {
    id: null,
    title: null,
    description: null,
    duration: null,
    creationDate: null,
    authors: [],
    isTopRated: false
  };

  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.subscribeToRoute();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public navigateToCoursesListPage(): void {
    this.router.navigateByUrl(`/${RouterPath.CoursesListPage}`);
  }
  private navigateToNotFoundPage(): void {
    this.router.navigateByUrl(`/${RouterPath.NotFoundPage}`);
  }

  private subscribeToRoute(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(routeParams => this.resolvePage(routeParams));
  }

  private resolvePage(routeParams: Params): void {
    if (routeParams.id) {
      const courseId = Number(routeParams.id);
      const course = this.coursesService.getCourse(courseId);
      if (!course) {
        this.navigateToNotFoundPage();
        return;
      }
      this.course = course;
    }
  }

}
