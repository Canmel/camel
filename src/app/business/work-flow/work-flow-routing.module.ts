import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkFlowComponent} from './work-flow.component';
import {WorkFlowEditComponent} from './work-flow-edit/work-flow-edit.component';
import {WorkFlowAddComponent} from './work-flow-add/work-flow-add.component';
import {WorkFlowListComponent} from './work-flow-list/work-flow-list.component';

const workFlowRoutes: Routes =
  [{
    path: '',
    component: WorkFlowComponent,
    children: [
      {
        path: '',
        component: WorkFlowListComponent
      },
      {
        path: 'edit',
        component: WorkFlowEditComponent
      },
      {
        path: 'add',
        component: WorkFlowAddComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(workFlowRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkFlowRoutingModule {
}
