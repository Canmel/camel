import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserAddComponent} from './user-add/user-add.component';
import {TabsModule} from 'ngx-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PaginationModule} from 'ngx-bootstrap';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    UsersComponent,
    UserEditComponent,
    UserAddComponent,
    UserListComponent
  ],
  providers: [
    {provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}
  ]
})
export class UsersModule {
}
