import {Component, OnInit} from '@angular/core';
import {Properties} from '../public/properties';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import {Https} from '../public/https.service';
import {Urls} from '../public/url';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public localStorage: any;
  currentUser = {name: '张小凡'};

  constructor(public router: Router, public http: Https) {
    if (!sessionStorage.getItem(Properties.STRING.SESSION.AUTHENTICATED)) {
      this.router.navigate(['login']);
    }
    this.currentUser.name = sessionStorage.getItem(Properties.STRING.SESSION.NAME);
    http.get(Urls.USERS.CURRENT, null).subscribe(data => {
      this.currentUser.name = data['nickname'];
    });

  }

  ngOnInit() {
  }
}
