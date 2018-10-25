import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Urls} from './public/url';
import {PageNotFoundComponent} from './error-page/page-not-found/page-not-found.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: Urls.BUSINESS.MAIN.HOME,
  pathMatch: 'full'
  },
  {
    path: 'login',
    // component: HomeComponent
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
export class AppRoutingModule { }

