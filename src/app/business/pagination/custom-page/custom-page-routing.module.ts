import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomPageComponent} from './custom-page.component';

const customPageRoutes: Routes =
  [
    {
      path: '', component: CustomPageComponent,
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(customPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomPageRoutingModule {
}
