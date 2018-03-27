import {Injectable} from '@angular/core';
import {Urls} from '../public/url';
import {Router} from '@angular/router';

import {HttpService} from '../public/http.service';
import * as $ from 'jquery';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService, public route: Router) {
  }

  doLogin(username: string, password: string, imageCode: string): any {



    // return this.httpService.post(Urls.SESSION.LOGIN, {
    //   username: username,
    //   password: password,
    //   imageCode: imageCode
    // });
  }
}
