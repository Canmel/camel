import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MenusComponent} from './menus.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {MenuEditComponent} from './menu-edit/menu-edit.component';
import {MenuAddComponent} from './menu-add/menu-add.component';

const menuRoutes: Routes = [{
  path: '',
  component: MenusComponent,
  children: [
    {
      path: '',
      component: MenuListComponent
    },
    {
      path: 'edit',
      component: MenuEditComponent
    },
    {
      path: 'add',
      component: MenuAddComponent
    }
  ]
}];


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
