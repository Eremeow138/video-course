import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginPageComponent } from "./components/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { FieldComponent } from "./components/login-form/field/field.component";

const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginFormComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...COMPONENTS]
})
export class LoginPageModule { }
