import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginPageComponent } from "./components/login-page.component";
import { LoginFormComponent } from "./components/login/login-form.component";

const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...COMPONENTS]
})
export class LoginPageModule { }
