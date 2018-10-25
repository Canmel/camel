import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ValidateComponent} from './validate.component';
import {ValidateRoutingModule} from './validate-routing.module';


@NgModule({
  imports: [
    ValidateRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ValidateComponent
  ],
  exports: [],
  providers: []
})
export class ValidateModule {
}
