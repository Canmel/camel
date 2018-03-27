import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidateComponent} from './validate.component';
import {ZorroValidModule} from './zorro-valid/zorro-valid.module';

const validRoutes: Routes =
  [{
    path: '',
    component: ValidateComponent,
    children: [
      {
        path: 'zorro',
        loadChildren: 'app/business/validate/zorro-valid/zorro-valid.module#ZorroValidModule'
      },
      {
        path: 'zorro',
        loadChildren: 'app/business/validate/zorro-valid/zorro-valid.module#ZorroValidModule'
      }
    ]
  }];


@NgModule({
  imports: [
    RouterModule.forChild(validRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ValidateRoutingModule {
}
