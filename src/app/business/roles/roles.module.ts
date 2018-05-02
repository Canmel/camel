import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PaginationModule} from 'ngx-bootstrap';
import {TooltipModule} from 'ngx-bootstrap';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RolesComponent} from './roles.component';
import {RolesEditComponent} from './roles-edit/roles-edit.component';
import {RolesAddComponent} from './roles-add/roles-add.component';
import {RolesListComponent} from './roles-list/roles-list.component';
import {RolesRoutingModule} from './roles-routing.module';

@NgModule({
  imports: [
    RolesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    RolesComponent,
    RolesEditComponent,
    RolesAddComponent,
    RolesListComponent
  ],
  providers: [
    {provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}
  ]
})
export class RolesModule {
}
