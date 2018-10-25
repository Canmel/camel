import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsModule} from 'ngx-bootstrap';
import {ZorroRoutingModule} from './zorro-routing.module';
import {ZorroComponent} from './zorro.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ZorroRoutingModule,
    TabsModule.forRoot(),
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    ZorroComponent
  ],
  providers: [
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: '80px' } }
  ]
})

export class ZorroModule {
}
