import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';

const usersRoutes: Routes =
  [{
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'edit',
        component: UserEditComponent
      },
      {
        path: 'add',
        component: UserAddComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {
}
