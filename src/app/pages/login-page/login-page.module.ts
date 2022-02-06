import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from "./components/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { FormModule } from "@app/form/form.module";
import { LoginPageRoutingModule } from "./login-page-routing.module";

const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    LoginPageRoutingModule
  ],
  exports: [...COMPONENTS]
})
export class LoginPageModule { }
