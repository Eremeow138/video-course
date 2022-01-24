import { Component, OnInit } from "@angular/core";
import { CourseFormControl } from "@app/form/enums/course-form-control.enum";
import { CourseForm } from "@app/form/models/course-form.model";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent implements OnInit {

  public titleFormControlName = CourseFormControl.Title;
  public descriptionFormControlName = CourseFormControl.Description;
  public durationFormControlName = CourseFormControl.Duration;
  public dateFormControlName = CourseFormControl.Date;
  public authorsFormControlName = CourseFormControl.Authors;

  public courseForm: CourseForm = null;

  constructor() { }

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.courseForm = new CourseForm({
      [CourseFormControl.Title]: "",
      [CourseFormControl.Description]: "",
      [CourseFormControl.Duration]: "",
      [CourseFormControl.Date]: "",
      [CourseFormControl.Authors]: [],
    });
  }

}
