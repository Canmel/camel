import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {EasyTableComponent} from './easy-table.component';

const easyTableRoutes: Routes =
  [
    {
      path: '', component: EasyTableComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(easyTableRoutes)
  ],
  declarations: []
})
export class EasyTableRoutingModule {
}
