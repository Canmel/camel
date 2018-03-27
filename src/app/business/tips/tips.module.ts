import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TipsComponent} from './tips.component';
import {TipsRoutingModule} from './tips-routing.module';

@NgModule({
  imports: [
    TipsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TipsComponent
  ]
})
export class TipsModule {
}
