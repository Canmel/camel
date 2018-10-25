import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EasyTableComponent} from './easy-table.component';
import {EasyTableRoutingModule} from './easy-table-routing.module';
import {TabsModule} from 'ngx-bootstrap';
import {AlertModule} from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    EasyTableRoutingModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    EasyTableComponent
  ]
})
export class EasyTableModule {
}
