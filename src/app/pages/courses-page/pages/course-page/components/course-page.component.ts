import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterPath } from "@commons/enums/routers.enum";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-course-page",
  templateUrl: "./course-page.component.html",
  styleUrls: ["./course-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent implements OnInit, OnDestroy {

  public course: ICourse = {
    id: null,
    name: null,
    description: null,
    duration: null,
    date: null,
    authors: [],
    isTopRated: false
  };

  private unsubscribe$ = new Subject<void>();

  private isCourseCreationPage = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.isCourseCreationPage = isNaN(+this.route.snapshot.params.id);

    if (this.route.snapshot.params.id) {
      const courseId = Number(this.route.snapshot.params.id);
      this.coursesService.getCourse(courseId)
        .subscribe(
          course => {
            this.course = course;
            this.cd.markForCheck();

          },
          () => {
            this.navigateToNotFoundPage();
          }
        );
    }


  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public save(course: ICourse): void {
    if (this.isCourseCreationPage) {
      this.coursesService.createCourse(course).subscribe(() => this.navigateToCoursesListPage());
      return;
    }
    const updatedCourse = course;

    updatedCourse.id = +this.route.snapshot.params.id;

    this.coursesService.updateCourse(updatedCourse).subscribe(() => this.navigateToCoursesListPage());
  }

  public navigateToCoursesListPage(): void {
    this.router.navigateByUrl(`/${RouterPath.CoursesListPage}`);
  }
  private navigateToNotFoundPage(): void {
    this.router.navigateByUrl(`/${RouterPath.NotFoundPage}`);
  }

}
