import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    curPage: 1
  };
  public title = '分页';
  public subTitle = '';

  constructor() {
  }

  ngOnInit() {
    this.paginationParams.totalCount = 69;
  }

  changeTitle(title, sub) {
    this.title = title;
    this.subTitle = sub;
  }

  getPageData(event) {
    console.log('分页回调', event);
  }
}
