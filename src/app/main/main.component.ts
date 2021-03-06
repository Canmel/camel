import {Component, OnInit} from '@angular/core';
import {Properties} from '../public/properties';
import {Router} from '@angular/router';
import {Https} from '../public/https.service';
import {Urls} from '../public/url';
import {HttpclientService} from '../public/httpclient.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public localStorage: any;

  homeUrl: string;

  currentUser = {name: '张小凡'};

  constructor(public router: Router, public http: Https, public httpClient: HttpclientService) {
    this.homeUrl = Urls.BUSINESS.MAIN.HOME;
    if (!sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN)) {
      this.router.navigate(['login']);
    }
    this.currentUser.name = sessionStorage.getItem(Properties.STRING.SESSION.NAME);
    http.get(Urls.USERS.CURRENT, {}).then(resp => {
      if (!resp || !resp['data']) { // 服务器session中已经没有当前用户，重新登录以刷新服务器session
        // this._notification.success('提示', '登录信息已经失效');
        this.router.navigate(['login']);
      }
      this.currentUser.name = resp['data']['username'];
    }, errorResp => {
      // this._notification.success('提示', '登录信息已失效');
      this.router.navigate(['login']);
    });

  }

  ngOnInit() {
  }

  toLogOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
