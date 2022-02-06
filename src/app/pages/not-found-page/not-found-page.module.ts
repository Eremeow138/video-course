import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { RouterModule } from "@angular/router";
import { SpacemanComponent } from "./components/not-found-page/spaceman/spaceman.component";
import { NotFoundPageRoutingModule } from "./not-found-page-routing-module";


const COMPONENTS = [NotFoundPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SpacemanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NotFoundPageRoutingModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class NotFoundPageModule { }
