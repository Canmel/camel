import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule
  ],
  declarations: [
    MenusComponent
  ]
})
export class MenuModule { }
