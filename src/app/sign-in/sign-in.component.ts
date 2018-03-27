import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Urls} from '../public/url';
import * as $ from 'jquery';
import {Properties} from '../public/properties';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public http: HttpClient, public route: Router) {
  }

  ngOnInit() {
  }

  toLogin() {
    const login = this;
    const formObj = {};
    $($('.loginForm').serializeArray()).each(function () {
      formObj[this.name] = this.value;
    });

    // this.http.post(Urls.SESSION.LOGIN, formObj).subscribe(data => {
    //   console.log(data);
    // });
    $.ajax({
      url: Urls.SESSION.LOGIN,
      data: {
        username: $('input[name="username"]').val(),
        password: $('input[name="password"]').val(),
        imageCode: $('input[name="imageCode"]').val()
      },
      method: 'POST',
      xhrFields: {
        withCredentials: true
      },
      success: function (resp) {
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHENTICATED, JSON.stringify(resp.authenticated).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHORITIES, JSON.stringify(resp.authorities).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.DETAILS, JSON.stringify(resp.details).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.NAME, JSON.stringify(resp.name).replace(/\"/g, ''));
        console.log('123123123123');
        login.route.navigate(['app/home']);
      },
      error: function (e, s, m) {
        console.log('e', e);
        console.log('s', s);
        console.log('m', m);
      }
    });
  }

}
