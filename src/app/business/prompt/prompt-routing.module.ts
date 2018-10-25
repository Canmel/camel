import {NgModule} from '@angular/core';
import {PromptComponent} from './prompt.component';
import {RouterModule, Routes} from '@angular/router';

const promptRoutes: Routes =
  [{
    path: '',
    component: PromptComponent,
    children: [
      {
        path: 'modal',
        loadChildren: 'app/business/prompt/modal/modal.module#ModalsModule'
      }, {
        path: 'zorro',
        loadChildren: 'app/business/prompt/zorro/zorro.module#ZorroModule'
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(promptRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PromptRoutingModule {
}
