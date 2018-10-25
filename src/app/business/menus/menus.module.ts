import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TabsModule} from 'ngx-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PaginationModule} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';

import {MenusComponent} from './menus.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {MenuEditComponent} from './menu-edit/menu-edit.component';

import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import {MenuRoutingModule} from '../menus/menus-routing.module';

@NgModule({
  imports: [
    MenuRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    MenusComponent,
    MenuListComponent,
    MenuAddComponent,
    MenuEditComponent
  ],
  providers: [
    {provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}
  ]
})
export class MenusModule {
}
