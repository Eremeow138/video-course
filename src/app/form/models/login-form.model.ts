import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginFormValue } from "../types/login-form-value.type";
import { AbstractForm } from "./abstract-form.model";

export class LoginForm extends AbstractForm {

  public createForm(loginFormParameters: LoginFormValue): FormGroup {
    const formGroup = new FormGroup({});
    for (const key in loginFormParameters) {
      if (loginFormParameters.hasOwnProperty(key)) {
        const initValue = loginFormParameters[key as keyof LoginFormValue];
        formGroup.setControl(key, new FormControl(initValue, Validators.required));
      }
    }
    return formGroup;
  }

}
