import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticationModule } from "@app/authentication/authentication.module";

import { LogoComponent } from "./components/logo/logo.component";

const COMPONENTS = [LogoComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AuthenticationModule],
  exports: [...COMPONENTS, AuthenticationModule],
})
export class CommonsModule { }
