import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';

const modalRoutingRoutes: Routes =
  [
    {
      path: '', component: ModalComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modalRoutingRoutes)
  ],
  declarations: []
})
export class ModalRoutingModule {
}
