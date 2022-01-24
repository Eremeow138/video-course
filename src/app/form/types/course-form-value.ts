import { CourseFormControl } from "../enums/course-form-control.enum";

export type CourseFormValue = {
  [CourseFormControl.Title]: string;
  [CourseFormControl.Description]: string;
  [CourseFormControl.Duration]: string;
  [CourseFormControl.Date]: string;
  [CourseFormControl.Authors]: string[];
};
