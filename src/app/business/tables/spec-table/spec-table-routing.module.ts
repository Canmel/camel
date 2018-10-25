import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SpecTableComponent} from './spec-table.component';

const specTableRoutes: Routes =
  [
    {
      path: '', component: SpecTableComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(specTableRoutes)
  ],
  declarations: []
})
export class SpecTableRoutingModule {
}
