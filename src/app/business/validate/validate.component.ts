import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  title = '表单验证';
  subTitle = '表单验证';

  constructor() {
  }

  ngOnInit() {
    $('body').css('background-color', '#e5e6e6');
  }

  changeTitle(title, sub) {
    this.title = title;
    this.subTitle = sub;
  }
}
