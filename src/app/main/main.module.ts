import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';

import {MainRoutingModule} from './main-routing.module';
import {LeftComponent} from '../left/left.component';
import {HttpClientModule} from '@angular/common/http';

import * as $ from 'Jquery';

@NgModule({
  imports: [
    MainRoutingModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent,
    LeftComponent,
  ],
  exports: [],
  providers: []
})
export class MainModule {
}
