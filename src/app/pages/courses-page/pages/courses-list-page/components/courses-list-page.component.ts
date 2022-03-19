import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ModalComponent } from "@modals/enums/modal-component.enum";
import { IModalData, IModalMetadata } from "@modals/interfaces/modals.interface";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { ModalMapperService } from "@modals/services/modal-mapper/modal-mapper.service";
import { ModalsService } from "@modals/services/modals/modals.service";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { takeUntil } from "rxjs/operators";
import { FilterPipe } from "@courses-list-page/pipes/filter/filter.pipe";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-courses-list-page",
  templateUrl: "./courses-list-page.component.html",
  styleUrls: ["./courses-list-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListPageComponent implements OnInit {

  public filteredCourses: ICourse[] = [];

  private filterСache = "";

  private courses: ICourse[] = [];

  constructor(
    private coursesService: CoursesService,
    private modalMapperService: ModalMapperService,
    private modalService: ModalsService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getFreshData();
  }

  public filter(searchString: string): void {
    this.filteredCourses = new FilterPipe().transform(this.courses, searchString);
    this.filterСache = searchString;
  }

  public deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id);
    this.getFreshData();
  }

  public redirectToCoursePage(courseId: number): void {
    this.router.navigate([courseId], { relativeTo: this.route });
  }

  public loadMoreCourses(): void {
    this.coursesService.loadMoreCourses();
    this.getFreshData();
  }

  public showDeleteConfirmationModal(courseId: number): void {

    const courseForDeletion = this.courses.find(course => course.id === courseId);

    const titleOfCourseForDeletion = (courseForDeletion).title;

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

  private getFreshData(): void {
    this.courses = this.coursesService.getListOfCourses();

    if (this.filterСache) {
      this.filter(this.filterСache);
    } else {
      this.filteredCourses = this.courses;
    }

    this.cd.detectChanges();
  }
}
