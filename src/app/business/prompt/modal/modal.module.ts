import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {TabsModule} from 'ngx-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ModalRoutingModule} from './modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    ModalComponent
  ]
})
export class ModalsModule {
}
