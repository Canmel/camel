import {NgModule} from '@angular/core';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';

import {PageNotFoundComponent} from './error-page/page-not-found/page-not-found.component';
import {Urls} from './public/url';

const routes: Routes = [{
  path: '',
  redirectTo: Urls.BUSINESS.MAIN.HOME,
  pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'app/sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
