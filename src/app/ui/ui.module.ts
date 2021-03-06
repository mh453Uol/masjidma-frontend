import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
