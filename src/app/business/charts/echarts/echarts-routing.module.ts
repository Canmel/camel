import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EchartsComponent} from './echarts.component';

const echartRoutes: Routes =
  [
    {
      path: '', component: EchartsComponent,
    }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(echartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EchartsRoutingModule {
}
