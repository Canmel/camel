import {Component, OnInit} from '@angular/core';
import {Https} from '../../../public/https.service';
import {HttpParams} from '@angular/common/http';
import {Urls} from '../../../public/url';
import {Router} from '@angular/router';
import {User} from '../../../public/entity/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  params: Map<string, any>;

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    curPage: 1,
    nextText: '下一页',
    previousText: '上一页'
  };

  constructor(public https: Https, public route: Router) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.USERS.PAGEQUERY, new HttpParams()).subscribe(data => {
      this.configParams(data);
    });
  }

  toAddUser() {
    this.route.navigate(['/app/users/add']);
  }

  query() {
    this.params.clear();
    if ($('input[name="username"]').val() !== '') {
      this.params.set('username', $('input[name="username"]').val());
    }
    if ($('input[name="email"]').val() !== '') {
      this.params.set('email', $('input[name="email"]').val());
    }

    this.doQuery();
  }

  pageChanged($event) {
    console.log($event);
    this.params.set('currentPage', $event['page']);
    this.https.getBySearchParams(Urls.USERS.PAGEQUERY, this.params).subscribe(data => {
      this.configParams(data);
    });
  }

  doQuery() {
    this.https.getBySearchParams(Urls.USERS.PAGEQUERY, this.params).subscribe(data => {
      this.configParams(data);
    });
  }

  configParams(data) {
    this.users = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.curPage = data['pageNum'];
  }

}
