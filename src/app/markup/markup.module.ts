import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonsModule } from "../commons/commons.module";
import { AuthenticationModule } from "@authentication/authentication.module";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UserComponent } from "./components/header/user/user.component";
import { RouterModule } from "@angular/router";

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS, UserComponent],
  imports: [CommonModule, CommonsModule, AuthenticationModule, RouterModule],
  exports: [...COMPONENTS],
})
export class MarkupModule { }
