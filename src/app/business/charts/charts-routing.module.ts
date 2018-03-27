import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartsComponent} from './charts.component';

const chartRoutes: Routes =
  [{
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'funsionchart',
        loadChildren: 'app/business/charts/funsionchart/funsionchart.module#FunsionchartModule'
      }, {
        path: 'echarts',
        loadChildren: 'app/business/charts/echarts/echarts.module#EchartsModule'
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(chartRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChartsRoutingModule {
}
