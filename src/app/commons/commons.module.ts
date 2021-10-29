import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./components/logo/logo.component";

const COMPONENTS = [LogoComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class CommonsModule {}
