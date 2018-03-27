import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BootPageComponent} from './boot-page.component';

const bootPageRoutes: Routes =
  [
    {
      path: '', component: BootPageComponent,
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(bootPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BootPageRoutingModule {
}
