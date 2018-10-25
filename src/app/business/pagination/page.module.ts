import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {PageRoutingModule} from './page-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    PageRoutingModule,
    CommonModule
  ],
  declarations: [
    PageComponent
  ],
  exports: [],
  providers: []
})
export class PageModule {
}
