import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPageComponent} from './custom-page.component';
import {PaginationModule} from '../../../public/pagination/pagination.module';
import {TabsModule} from 'ngx-bootstrap';
import {CustomPageRoutingModule} from './custom-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    CustomPageRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [
    CustomPageComponent
  ]
})
export class CustomPageModule {
}
