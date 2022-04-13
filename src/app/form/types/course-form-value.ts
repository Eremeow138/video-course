import { CourseFormControl } from "../enums/course-form-control.enum";

export type CourseFormValue = {
  [CourseFormControl.Name]: string;
  [CourseFormControl.Description]: string;
  [CourseFormControl.Duration]: number;
  [CourseFormControl.Date]: string;
  [CourseFormControl.Authors]: string[];
};
