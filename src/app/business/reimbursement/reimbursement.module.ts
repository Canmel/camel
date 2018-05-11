import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {NgZorroAntdModule, NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ReimbursementComponent} from './reimbursement.component';
import {ReimbursementEditComponent} from './reimbursement-edit/reimbursement-edit.component';
import {ReimbursementAddComponent} from './reimbursement-add/reimbursement-add.component';
import {ReimbursementListComponent} from './reimbursement-list/reimbursement-list.component';
import {ReimbursementRoutingModule} from './reimbursement-routing.module';

@NgModule({
  imports: [
    ReimbursementRoutingModule,
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
    ReimbursementComponent,
    ReimbursementEditComponent,
    ReimbursementAddComponent,
    ReimbursementListComponent
  ],
  providers: [
    {provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}
  ]
})
export class ReimbursementModule {
}
