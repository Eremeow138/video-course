import { FormControl, Validators } from "@angular/forms";
import { LoginFormValue } from "../../types/login-form-value.type";
import { AbstractForm } from "./abstract-form.model";

export class LoginForm extends AbstractForm {

  constructor(fields: LoginFormValue) {
    super();
    this.createControls(fields);
  }

  public createControls(fields: LoginFormValue): void {
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const initValue = fields[key as keyof LoginFormValue];
        const field = new FormControl(initValue, Validators.required);
        this.setControl(key, field);
      }
    }
  }

}
