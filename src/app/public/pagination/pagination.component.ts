import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  // 父控件传递参数给子控件 直接通过 Input
  @Input('totalNum') totalNum; // 总数据条数
  @Input('pageSize') pageSize; // 每页数据条数
  @Input('totalPage') totalPage; // 总页数
  @Input('curPage') curPage; // 当前页码;

  // 子控件传递给父控件 通过事件传播
  @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;

  changePage(pageNo) {
    const vm = this;
    console.log('修改页码', pageNo);
    // 重设当前页数
    this.curPage = pageNo;
    this.changeCurPage.emit(this.curPage);
  }

  constructor() {
    const vm = this;
  }

  ngOnInit() {
  }

}
