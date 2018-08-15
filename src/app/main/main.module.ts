import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {LeftComponent} from '../left/left.component';
import {HttpClientModule} from '@angular/common/http';
import {NzAvatarModule} from 'ng-zorro-antd';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';

import * as $ from 'Jquery';

@NgModule({
  imports: [
    MainRoutingModule,
    HttpClientModule,
    NzAvatarModule
  ],
  declarations: [
    MainComponent,
    LeftComponent,
  ],
  exports: [],
  providers: [{provide: NZ_NOTIFICATION_CONFIG, useValue: {nzTop: '10%'}}]
})
export class MainModule {
}
