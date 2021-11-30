import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IfAuthenticatedDirective } from "./directives/if-authenticated/if-authenticated.directive";

@NgModule({
  declarations: [IfAuthenticatedDirective],
  imports: [
    CommonModule
  ],
  exports: [IfAuthenticatedDirective]
})
export class AuthenticationModule { }
