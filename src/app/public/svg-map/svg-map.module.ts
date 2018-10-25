import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SvgMapComponent} from './svg-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SvgMapComponent
  ],
  exports: [
    SvgMapComponent
  ]
})
export class SvgMapModule {
}
