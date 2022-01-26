import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { CourseFormControl } from "../enums/course-form-control.enum";
import { CourseFormValue } from "../types/course-form-value";
import { AbstractForm } from "./abstract-form.model";

export class CourseForm extends AbstractForm {

  constructor(fields: CourseFormValue) {
    super();
    this.createControls(fields);
  }

  public createControls(fields: CourseFormValue): void {
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const initValue = fields[key as keyof CourseFormValue];
        const field = new FormControl(initValue, Validators.required);
        this.setControl(key, field);
      }
    }
    // TODO find how to use addValidators
    this.get(CourseFormControl.Duration).setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);

    this.get(CourseFormControl.Authors).setValidators([Validators.required, this.authorsValidator()]);
  }

  private authorsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (!control.value) {
        return { valid: false };
      }

      const authorRgEx = /^\D+$/;

      const authors = control.value as string[];

      const isValid = authors.reduce((result, author) => result && authorRgEx.test(author), true);

      return isValid ? null : { valid: false };
    };
  }

}
