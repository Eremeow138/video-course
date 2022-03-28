import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ModalComponent } from "@modals/enums/modal-component.enum";
import { IModalData, IModalMetadata } from "@modals/interfaces/modals.interface";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { ModalMapperService } from "@modals/services/modal-mapper/modal-mapper.service";
import { ModalsService } from "@modals/services/modals/modals.service";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { switchMap, takeUntil, tap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { TitleCasePipe } from "@angular/common";
import { Subject } from "rxjs";

@Component({
  selector: "app-courses-list-page",
  templateUrl: "./courses-list-page.component.html",
  styleUrls: ["./courses-list-page.component.scss"],
  providers: [TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListPageComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];

  public isLoadMoreButtonVisible = false;

  private searchCurrentValue = "";

  private startFrom = 0;

  private increment = 3;

  private coursesSortKey = "date";

  private unsubscribe$ = new Subject<void>();

  constructor(
    private coursesService: CoursesService,
    private modalMapperService: ModalMapperService,
    private modalService: ModalsService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private titleCasePipe: TitleCasePipe) { }

  ngOnInit(): void {
    this.getFreshData();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public filter(searchString: string): void {
    this.searchCurrentValue = searchString.toLowerCase();
    this.startFrom = 0;
    this.courses.length = 0;
    this.getFreshData();
  }

  public deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id)
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap(() => {
          const countOfCourses = this.courses.length;
          return this.coursesService.getListOfCourses(0, countOfCourses, this.searchCurrentValue, this.coursesSortKey);
        })
      )
      .subscribe(
        courses => {
          this.courses = [...courses];
          this.cd.markForCheck();
        }
      );
  }

  public redirectToCoursePage(courseId: number): void {
    this.router.navigate([courseId], { relativeTo: this.route });
  }

  public showDeleteConfirmationModal(courseId: number): void {

    const courseForDeletion = this.courses.find(course => course.id === courseId);

    const titleOfCourseForDeletion = this.titleCasePipe.transform(courseForDeletion.name);

    const modalMetadata: IModalMetadata = {
      title: "Delete course?",
      text: ["Are you sure you want to delete", `${titleOfCourseForDeletion}?`],
      buttonsText: {
        cancel: "Cancel",
        confirm: "Yes, delete"
      },
      initialResult: {
        key: "id",
        value: courseId
      }
    };

    const component = this.modalMapperService.getModalType(ModalComponent.ConfirmationModal);

    const data: IModalData = {
      component,
      metadata: modalMetadata
    };

    this.modalService.showModal(data).pipe(
      takeUntil(this.modalService.hideModals$)
    ).subscribe(resultData => {
      const initialResult = resultData.initialResult;
      this.deleteCourse(initialResult.value as number);
      this.modalService.hideModals();
    });
  }

  public getFreshData(): void {
    this.coursesService.getListOfCourses(this.startFrom, this.increment, this.searchCurrentValue, this.coursesSortKey)
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(courses => {
          this.courses = [...this.courses, ...courses];
          this.startFrom = this.courses.length;
        }),
        switchMap(() => this.coursesService.getListOfCourses(this.startFrom, 1, this.searchCurrentValue, this.coursesSortKey))
      )
      .subscribe(courses => {
        this.isLoadMoreButtonVisible = courses.length > 0;
        this.cd.markForCheck();
      });
  }
}
