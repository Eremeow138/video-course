import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


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
      const date = new Date(control.value as Date);

      if (date && date instanceof Date && !isNaN(date.getTime())) {
        return null;
      }

      return { bsDate: { invalid: date } };
    };
  }

}
