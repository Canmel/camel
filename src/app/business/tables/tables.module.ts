import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablesRoutingModule} from './tables-routing.module';
import {TablesComponent} from './tables.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    TablesRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TablesComponent
  ]
})
export class TablesModule {
}
