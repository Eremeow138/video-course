import { LoginFormControl } from "../enums/login-form-control.enum";

export type LoginFormValue = {
  [key in LoginFormControl]: string;
};
