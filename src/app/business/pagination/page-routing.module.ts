import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageComponent} from './page.component';
import {ChartsComponent} from '../charts/charts.component';
import {CustomPageModule} from './custom-page/custom-page.module';
import {BootPageModule} from './boot-page/boot-page.module';

const pageRoutes: Routes = [{
  path: '',
  component: PageComponent,
  children: [
    {
      path: 'custom',
      loadChildren: 'app/business/pagination/custom-page/custom-page.module#CustomPageModule'
    }, {
      path: 'bootstrap',
      loadChildren: 'app/business/pagination/boot-page/boot-page.module#BootPageModule'
    }
  ]
}];


@NgModule({
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule {
}
