import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogoComponent } from "./components/logo/logo.component";
import { DurationPipe } from "./pipes/duration/duration.pipe";

const COMPONENTS = [LogoComponent, DurationPipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class CommonsModule { }
