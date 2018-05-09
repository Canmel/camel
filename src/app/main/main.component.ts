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
    if (!sessionStorage.getItem(Properties.STRING.SESSION.AUTHENTICATED)) {
      this.router.navigate(['login']);
    }
    this.currentUser.name = sessionStorage.getItem(Properties.STRING.SESSION.NAME);
    http.get(Urls.USERS.CURRENT, null).then(data => {
      console.log('获取用户详情', data);
      this.currentUser.name = data['nickname'];
    });

  }

  ngOnInit() {
  }

  toLogOut() {
    this.httpClient.get(Urls.SESSION.LOGOUT, {}).then(data => {
      console.log('ss', data);
    });
  }
}
