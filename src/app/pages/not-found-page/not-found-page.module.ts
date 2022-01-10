import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { RouterModule } from "@angular/router";
import { SpacemanComponent } from "./components/not-found-page/spaceman/spaceman.component";


const COMPONENTS = [NotFoundPageComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SpacemanComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class NotFoundPageModule { }
