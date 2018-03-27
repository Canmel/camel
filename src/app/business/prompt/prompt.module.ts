import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromptComponent} from './prompt.component';
import {FormsModule} from '@angular/forms';
import {PromptRoutingModule} from './prompt-routing.module';

@NgModule({
  imports: [
    PromptRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    PromptComponent
  ]
})
export class PromptModule {
}
