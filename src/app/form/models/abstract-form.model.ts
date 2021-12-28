import { FormGroup } from "@angular/forms";
import { LoginFormValue } from "../types/login-form-value.type";

export abstract class AbstractForm {

  abstract createForm(formParameters: LoginFormValue): FormGroup;

}
