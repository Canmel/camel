import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-easy-table',
  templateUrl: './easy-table.component.html',
  styleUrls: ['./easy-table.component.css']
})
export class EasyTableComponent implements OnInit {

  users: Object[];

  data = [];

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {username: '姓名', email: 'email@ee.com', tel: '13788889999'},
      {username: '姓名2', email: 'email@ee.com', tel: '13788889999'},
    ];

    for (let i = 0; i < 100; i++) {
      this.data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }

  renderForm(obj: Object) {
  }

  toAction(event) {
    alert('action');
  }

}
