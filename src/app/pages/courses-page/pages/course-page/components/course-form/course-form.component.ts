import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CourseFormControl } from "@app/form/enums/course-form-control.enum";
import { CourseForm } from "@app/form/models/course-form.model";
import { ICourse } from "@pages/courses-page/courses/interfaces/course.interface";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"]
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

  public titleFormControlName = CourseFormControl.Title;
  public descriptionFormControlName = CourseFormControl.Description;
  public durationFormControlName = CourseFormControl.Duration;
  public dateFormControlName = CourseFormControl.Date;
  public authorsFormControlName = CourseFormControl.Authors;

  public courseForm: CourseForm = null;

  @Output()
  private cancelEvent = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
    this.createForm();
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

}
