import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output
} from "@angular/core";
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
export class CourseFormComponent implements OnInit, OnChanges {

  @Input()
  public course: ICourse = {
    id: null,
    name: null,
    description: null,
    duration: null,
    date: null,
    authors: [],
    isTopRated: false
  };

  public get formTitle(): string {
    if (this.course.id) {
      return "Edit course";
    }
    return "New course";
  }

  public titleFormControlName = CourseFormControl.Name;
  public descriptionFormControlName = CourseFormControl.Description;
  public durationFormControlName = CourseFormControl.Duration;
  public dateFormControlName = CourseFormControl.Date;
  public authorsFormControlName = CourseFormControl.Authors;

  public courseForm: CourseForm = null;

  public authors$: Observable<string[]>;

  public authorsNotFound = "Authors not found";

  @Output()
  private cancelEvent = new EventEmitter<void>();
  @Output()
  private saveEvent = new EventEmitter<ICourse>();

  private searchStringSubject = new Subject<string>();

  constructor(private coursesService: CoursesService) { }

  public ngOnInit(): void {
    this.initializeAuthors();
  }

  ngOnChanges(): void {
    this.createForm();
  }

  public searchHints(searchString: string): void {
    this.searchStringSubject.next(searchString);
  }

  public cancel(): void {
    this.cancelEvent.emit();
  }
  public save(): void {
    const authorsNames = this.courseForm.value.authors as string[];

    this.coursesService.getListOfAuthors()
      .pipe(
        map(authors => authors.filter(author => authorsNames.includes(author.name)))
      ).subscribe(authors => {
        const formData = { ...this.courseForm.value };
        formData.authors = authors;
        const course = formData as ICourse;
        this.saveEvent.emit(course);
      });

  }

  public createForm(): void {
    this.courseForm = new CourseForm({
      [CourseFormControl.Name]: this.course.name,
      [CourseFormControl.Description]: this.course.description,
      [CourseFormControl.Duration]: this.course.duration,
      [CourseFormControl.Date]: this.course.date,
      [CourseFormControl.Authors]: this.course.authors.map(author => author.name),
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
