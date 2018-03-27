import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MenusComponent} from './menus.component';

const menuRoutes: Routes = [
  {
    path: '', component: MenusComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule {
}
