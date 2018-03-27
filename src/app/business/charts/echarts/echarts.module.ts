import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EchartsComponent} from './echarts.component';
import {EchartsRoutingModule} from './echarts-routing.module';
import { TabsModule } from 'ngx-bootstrap';
import {SvgMapModule} from '../../../public/svg-map/svg-map.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EchartsRoutingModule,
    TabsModule.forRoot(),
    SvgMapModule
  ],
  declarations: [
    EchartsComponent
  ]
})
export class EchartsModule {
}
