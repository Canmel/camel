import {Component, OnInit} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Urls} from '../public/url';
import * as $ from 'jquery';
import {Properties} from '../public/properties';
import {Https} from '../public/https.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public http: Https, public route: Router) {
  }

  ngOnInit() {
  }

  toLogin() {
    const login = this;
    const formObj = {};
    $($('.loginForm').serializeArray()).each(function () {
      formObj[this.name] = this.value;
    });

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
        console.log(resp);
        sessionStorage.setItem(Properties.STRING.SESSION.ACCESS_TOKEN, resp.access_token);
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHENTICATED, '');
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHORITIES, '');
        sessionStorage.setItem(Properties.STRING.SESSION.DETAILS, resp.data);
        sessionStorage.setItem(Properties.STRING.SESSION.NAME, resp.data.username);
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
