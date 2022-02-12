import { FormControl, Validators } from "@angular/forms";
import { CourseFormControl } from "../../enums/course-form-control.enum";
import { CourseFormValue } from "../../types/course-form-value";
import { AbstractForm } from "./abstract-form.model";
import { CustomValidators } from "../form-validators/custom-validators.model";
import { Duration } from "@app/form/enums/duration.enum";

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

    this.get(CourseFormControl.Duration).addValidators([
      Validators.pattern(Duration.Pattern),
      Validators.max(Duration.MaxValue),
      Validators.min(Duration.MinValue)
    ]);

    this.get(CourseFormControl.Authors).addValidators(CustomValidators.authorsValidator());

    this.get(CourseFormControl.Date).addValidators(CustomValidators.dateValidator());
  }
}
