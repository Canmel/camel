import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ChartsRoutingModule} from './charts-routing.module';
import {ChartsComponent} from './charts.component';

import {FusionChartsModule} from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import {SvgMapModule} from '../../public/svg-map/svg-map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SvgMapModule,
    ChartsRoutingModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme)
  ],
  declarations: [
    ChartsComponent
  ]
})
export class ChartsModule {
}
