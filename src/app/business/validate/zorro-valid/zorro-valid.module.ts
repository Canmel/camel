import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsModule} from 'ngx-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ZorroValidComponent} from './zorro-valid.component';
import {ZorroValidRoutingModule} from './zorro-valid-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ZorroValidRoutingModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    ZorroValidComponent
  ],
  providers: [
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: '80px' } }
  ]
})
export class ZorroValidModule {
}
