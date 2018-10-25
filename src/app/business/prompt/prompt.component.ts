import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  users: Object[];

  title = '弹出与提示';
  subTitle = '不同场景下的用户交流';

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
