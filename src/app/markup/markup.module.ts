import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonsModule } from "../commons/commons.module";

import { HeaderComponent } from "./components/header/header.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UserComponent } from "./components/header/user/user.component";
import { AuthenticationModule } from "@app/authentication/authentication.module";

const COMPONENTS = [HeaderComponent, BreadcrumbsComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS, UserComponent],
  imports: [CommonModule, CommonsModule, AuthenticationModule],
  exports: [...COMPONENTS],
})
export class MarkupModule { }
