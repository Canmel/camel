import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecTableComponent} from './spec-table.component';
import {TabsModule} from 'ngx-bootstrap';
import {SpecTableRoutingModule} from './spec-table-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    SpecTableRoutingModule,
    TabsModule.forRoot(),
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    SpecTableComponent
  ]
})
export class SpecTableModule {
}
