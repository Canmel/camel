import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in.component';

/**
 * 主体路由
 */
const signInRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(signInRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignInRoutingModule {
}
