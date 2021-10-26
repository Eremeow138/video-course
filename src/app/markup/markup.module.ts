import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './header/user/user.component';
import { CommonsModule } from '../commons/commons.module';

const COMPONENTS = [HeaderComponent, BreadcrumbsComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS, UserComponent],
  imports: [CommonModule, CommonsModule],
  exports: [...COMPONENTS],
})
export class MarkupModule {}
