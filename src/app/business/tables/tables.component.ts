import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  users: Object[];

  title = '表格';
  subTitle = '不同场景下的表格应用';

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {username: '姓名', email: 'email@ee.com', tel: '13788889999'},
      {username: '姓名2', email: 'email@ee.com', tel: '13788889999'},
    ];
  }

  renderForm() {
  }

  changeTitle(title, sub) {
    this.title = title;
    this.subTitle = sub;
  }

}
