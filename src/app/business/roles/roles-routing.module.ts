import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RolesComponent} from './roles.component';
import {RolesListComponent} from './roles-list/roles-list.component';
import {RolesEditComponent} from './roles-edit/roles-edit.component';
import {RolesAddComponent} from './roles-add/roles-add.component';

const rolesRoutes: Routes =
  [{
    path: '',
    component: RolesComponent,
    children: [
      {
        path: '',
        component: RolesListComponent
      },
      {
        path: 'edit',
        component: RolesEditComponent
      },
      {
        path: 'add',
        component: RolesAddComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(rolesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RolesRoutingModule {
}
