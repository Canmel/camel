import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';

import {MainRoutingModule} from './main-routing.module';
import {LeftComponent} from '../left/left.component';
import * as $ from 'Jquery';

@NgModule({
  imports: [
    MainRoutingModule
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
