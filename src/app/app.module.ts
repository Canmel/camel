// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {HttpClientModule} from '@angular/common/http';
// import {PageNotFoundComponent} from './error-page/page-not-found/page-not-found.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AppRoutingModule} from './app-routing.module';
//
// import {AppComponent} from './app.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     PageNotFoundComponent
//   ],
//   imports: [
//     BrowserAnimationsModule,
//     HttpClientModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
// }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {PageNotFoundComponent} from './error-page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
