import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { RouterModule } from "@angular/router";

const COMPONENTS = [BreadcrumbsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [...COMPONENTS]
})
export class BreadcrumbsModule { }
