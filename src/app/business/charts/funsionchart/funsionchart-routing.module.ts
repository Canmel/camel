import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FunsionchartComponent} from './funsionchart.component';

const funsionChartRoutes: Routes =
  [
    {
      path: '', component: FunsionchartComponent,
    }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(funsionChartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FunsionchartRoutingModule {
}
