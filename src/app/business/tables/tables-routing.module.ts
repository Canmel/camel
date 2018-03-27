import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TablesComponent} from './tables.component';

const tablesRoutes: Routes =
  [{
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'easy',
        loadChildren: 'app/business/tables/easy-table/easy-table.module#EasyTableModule'
      },
      {
        path: 'spec',
        loadChildren: 'app/business/tables/spec-table/spec-table.module#SpecTableModule'
      }
    ]
  }];


@NgModule({
  imports: [
    RouterModule.forChild(tablesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TablesRoutingModule {
}
