import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Https} from '../../../public/https.service';
import {HttpParams} from '@angular/common/http';
import {Urls} from '../../../public/url';
import {Router} from '@angular/router';
import {User} from '../../../public/entity/user';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  modalRef: BsModalRef;

  params: {};

  preDelete = {};

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    currentPage: 1,
    nextText: '下一页',
    previousText: '上一页'
  };

  constructor(public https: Https, public route: Router,
              private httpClient: HttpClient,
              private _notification: NzNotificationService,
              private modalService: BsModalService) {
    this.params = {};
  }

  ngOnInit() {
    this.https.get(Urls.USERS.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    });
  }

  toAddUser() {
    this.route.navigate([Urls.BUSINESS.USERS.ADD]);
  }

  query() {
    console.log('params是', this.params);
    this.params['currentPage'] = 1;
    this.https.get(Urls.USERS.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }

  edit(obj: Object) {
    console.log(obj);
    this.route.navigate([Urls.BUSINESS.ROLES.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm() {
    this.https.delete(Urls.USERS.DELETE, this.preDelete['id']).then(resp => {
      this.modalRef.hide();
      console.log(resp['code']);
      console.log(resp['code'] !== 200);
      if (resp['code'] !== 200) {
        this._notification.error('提示', '删除用户 ' + this.preDelete['name'] + ' 失败！');
      } else {
        this._notification.success('提示', '用户 ' + this.preDelete['name'] + ' 已被删除！');
      }
      this.query();
    });
  }

  decline() {
    this.modalRef.hide();
  }

  pageChanged($event) {
    console.log($event);
    this.params['currentPage'] = $event['page'];
    this.https.get(Urls.USERS.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }

  configParams(data) {
    this.users = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = data['pageNum'];
  }

}