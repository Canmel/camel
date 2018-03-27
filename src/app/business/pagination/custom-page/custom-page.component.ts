import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent implements OnInit {

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    curPage: 1
  };

  constructor() { }

  ngOnInit() {
    this.paginationParams.totalCount = 69;
  }

  getPageData(event) {
    console.log('分页回调', event);
  }
}
