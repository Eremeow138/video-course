import { FormControl, Validators } from "@angular/forms";
import { CourseFormControl } from "../../enums/course-form-control.enum";
import { CourseFormValue } from "../../types/course-form-value";
import { AbstractForm } from "./abstract-form.model";
import { CustomValidators } from "../form-validators/custom-validators.model";
import { DurationLimit } from "@app/form/enums/duration-limit.enum";
import { StringLimit } from "@app/form/enums/string-limit.enum";
import { TextLimit } from "@app/form/enums/text-limit.enum";

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

    this.get(CourseFormControl.Name).addValidators(Validators.maxLength(StringLimit.MaxLength));

    this.get(CourseFormControl.Description).addValidators(Validators.maxLength(TextLimit.MaxLength));

    this.get(CourseFormControl.Duration).addValidators([
      Validators.pattern("^[0-9]*$"),
      Validators.max(DurationLimit.MaxValue),
      Validators.min(DurationLimit.MinValue)
    ]);

    this.get(CourseFormControl.Date).addValidators(CustomValidators.dateValidator());

    this.get(CourseFormControl.Authors).addValidators(CustomValidators.authorsValidator());

  }
}
