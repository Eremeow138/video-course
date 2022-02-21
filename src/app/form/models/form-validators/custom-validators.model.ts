import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { IDateErrors } from "@app/form/interfaces/date-errors.interface";


export class CustomValidators {

  public static authorsValidator(): ValidatorFn {
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

  public static dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const minDate = new Date();
      minDate.setHours(0, 0, 0, 0);

      const date = new Date(control.value as Date);

      const errors: IDateErrors = { bsDate: {} };

      if (!(date && date instanceof Date && !isNaN(date.getTime()))) {
        errors.bsDate.invalid = date;
      }

      if (date < minDate) {
        errors.bsDate.minDate = minDate;
      }

      return JSON.stringify(errors.bsDate) === "{}" ? null : errors;
    };
  }

}
