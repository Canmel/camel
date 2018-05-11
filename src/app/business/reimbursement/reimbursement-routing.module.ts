import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReimbursementComponent} from './reimbursement.component';
import {ReimbursementListComponent} from './reimbursement-list/reimbursement-list.component';
import {ReimbursementEditComponent} from './reimbursement-edit/reimbursement-edit.component';
import {ReimbursementAddComponent} from './reimbursement-add/reimbursement-add.component';

const reimbursementRoutes: Routes =
  [{
    path: '',
    component: ReimbursementComponent,
    children: [
      {
        path: '',
        component: ReimbursementListComponent
      },
      {
        path: 'edit',
        component: ReimbursementEditComponent
      },
      {
        path: 'add',
        component: ReimbursementAddComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(reimbursementRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReimbursementRoutingModule {
}
