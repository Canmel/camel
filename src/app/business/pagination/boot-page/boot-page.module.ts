import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap';
import {BootPageComponent} from './boot-page.component';
import {BootPageRoutingModule} from './boot-page-routing.module';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BootPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    BootPageComponent
  ]
})
export class BootPageModule {
}
