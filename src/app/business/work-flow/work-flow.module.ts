import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap';
import {TooltipModule} from 'ngx-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
// import {NzFormItemDirective} from 'ng-zorro-antd';
import {PaginationModule} from 'ngx-bootstrap';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import {ModalModule} from 'ngx-bootstrap/modal';
import {WorkFlowListComponent} from './work-flow-list/work-flow-list.component';
import {WorkFlowEditComponent} from './work-flow-edit/work-flow-edit.component';
import {WorkFlowAddComponent} from './work-flow-add/work-flow-add.component';
import {WorkFlowComponent} from './work-flow.component';
import {WorkFlowRoutingModule} from './work-flow-routing.module';

@NgModule({
  imports: [
    WorkFlowRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    WorkFlowListComponent,
    WorkFlowEditComponent,
    WorkFlowAddComponent,
    WorkFlowComponent
  ],
  providers: [
    {provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}
    // NzFormItemDirective
  ]
})
export class WorkFlowModule {
}
