import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZorroComponent} from './zorro.component';

const zorroRoutes: Routes =
  [
    {
      path: '', component: ZorroComponent,
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(zorroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ZorroRoutingModule {
}
