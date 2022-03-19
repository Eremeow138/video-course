import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CourseFormControl } from "@app/form/enums/course-form-control.enum";
import { CourseForm } from "@app/form/models/form-models/course-form.model";
import { ICourse } from "@pages/courses-page/courses/interfaces/course/course.interface";
import { CoursesService } from "@pages/courses-page/courses/services/courses/courses.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {

  @Input()
  public course: ICourse = {
    id: null,
    title: null,
    description: null,
    duration: null,
    creationDate: null,
    authors: [],
    isTopRated: false
  };

  public get formTitle(): string {
    if (this.course.id) {
      return "Edit course";
    }
    return "New course";
  }

  public titleFormControlName = CourseFormControl.Title;
  public descriptionFormControlName = CourseFormControl.Description;
  public durationFormControlName = CourseFormControl.Duration;
  public dateFormControlName = CourseFormControl.Date;
  public authorsFormControlName = CourseFormControl.Authors;

  public courseForm: CourseForm = null;

  public authors$: Observable<string[]>;

  public authorsNotFound = "Authors not found";

  @Output()
  private cancelEvent = new EventEmitter<void>();

  private searchStringSubject = new Subject<string>();

  constructor(private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.createForm();
    this.initializeAuthors();
  }

  public searchHints(searchString: string): void {
    this.searchStringSubject.next(searchString);
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }

  public createForm(): void {
    this.courseForm = new CourseForm({
      [CourseFormControl.Title]: this.course.title,
      [CourseFormControl.Description]: this.course.description,
      [CourseFormControl.Duration]: this.course.duration,
      [CourseFormControl.Date]: this.course.creationDate,
      [CourseFormControl.Authors]: this.course.authors,
    });
  }

  private initializeAuthors(): void {
    this.authors$ = this.searchStringSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchString: string) => this.coursesService.searchAuthors(searchString)),
      map(authors => {
        return authors.length ? authors.map(author => author.name) : [this.authorsNotFound];
      }),
    );
  }

}
