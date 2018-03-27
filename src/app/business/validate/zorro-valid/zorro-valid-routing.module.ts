import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ZorroValidComponent} from './zorro-valid.component';

const zorroValidRoutes: Routes =
  [
    {
      path: '', component: ZorroValidComponent,
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(zorroValidRoutes)
  ],
  declarations: []
})
export class ZorroValidRoutingModule {}
