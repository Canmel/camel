import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ImageCodeComponent} from '../public/image-code/image-code.component';
import {HttpClientModule} from '@angular/common/http';
import {SignInRoutingModule} from './sign-in-routing.module';
import {SignInComponent} from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SignInRoutingModule
  ],
  declarations: [
    SignInComponent,
    ImageCodeComponent
  ],
  exports: [],
  providers: []
})
export class SignInModule {
}
