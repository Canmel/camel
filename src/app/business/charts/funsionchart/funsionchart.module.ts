import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FusionChartsModule} from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import {FunsionchartComponent} from './funsionchart.component';
import {FunsionchartRoutingModule} from './funsionchart-routing.module';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FunsionchartRoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    TabsModule.forRoot()
  ],
  declarations: [
    FunsionchartComponent
  ]
})
export class FunsionchartModule {
}
