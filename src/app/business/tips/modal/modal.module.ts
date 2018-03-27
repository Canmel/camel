import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {TabsModule} from 'ngx-bootstrap';
import {ModalRoutingModule} from './modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [
    ModalComponent
  ]
})
export class ModalModule {
}
