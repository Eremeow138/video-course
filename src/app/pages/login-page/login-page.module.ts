import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginPageComponent } from "./components/login-page.component";
import { LoginComponent } from "./components/login/login.component";

const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...COMPONENTS]
})
export class LoginPageModule { }
