import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Https} from '../../../public/https.service';
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

  userDetail = {};

  allRoles = [];

  list: any[] = [];

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
    this.route.navigate([Urls.BUSINESS.USERS.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  addRoles(template: TemplateRef<any>, id) {
    this.https.get(Urls.ROLES.ALL).then(resp => {
      this.allRoles = resp['data'];
      this.https.get(Urls.USERS.DETAILS + id).then(details => {
        this.userDetail = details['data'];
        const sd = [];
        this.allRoles.forEach(function (val) {
          sd.push({
            key: val['id'],
            title: val['description'],
            direction: 'right'
          });
        });
        if (this.userDetail['sysRoles']) {
          this.userDetail['sysRoles'].forEach(role => {
            sd.forEach(function (value, index) {
              if (value['key'] === role['id']) {
                sd[index].direction = 'left';
              }
            });
          });
        }
        this.list = sd;
      });
    });

    this.modalRef = this.modalService.show(template, {class: 'modal-md modal-position'});
  }

  change(ret: any) {
    this.updateRoleList(ret);
  }

  select() {

  }

  roleConfirm() {
    const roleIds = [];
    this.list.forEach(function (value, index, array) {
      if (value['direction'] === 'left') {
        roleIds.push(value['key']);
      }
    });
    this.userDetail['roleIds'] = roleIds;
    this.https.post(Urls.USERS.UPDATEROLES, this.userDetail).then(resp => {
      this._notification.success('成功', resp['msg']);
    });
    this.modalRef.hide();
  }

  confirm() {
    this.https.delete(Urls.USERS.DELETE, this.preDelete['id']).then(resp => {
      this.modalRef.hide();
      console.log(resp['code']);
      console.log(resp['code'] !== 200);
      this._notification.success('提示', resp['msg']);
      this.query();
    }, errorResp => {
      this._notification.error('失败', errorResp['msg']);
    });
  }

  decline() {
    this.modalRef.hide();
  }

  pageChanged($event) {
    console.log($event);
    this.params['currentPage'] = $event['page'];
    this.https.get(Urls.USERS.PAGEQUERY, this.params).then(resp => {
      this.configParams(resp);
    });
  }

  configParams(resp) {
    const page = resp['data'];
    this.users = page['records'];
    this.paginationParams.totalCount = page['total'];
    this.paginationParams.pageSize = page['size'];
    const totalPage = Math.ceil(this.paginationParams.totalCount / this.paginationParams.pageSize);
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = page['current'];
  }

  updateRoleList(ret: any) {
    if (ret['list'] == null) {
      return this.list;
    }
    this.list.forEach(function (item) {
      ret['list'].forEach(function (c) {
        if (c['key'] === item['key']) {
          item.direction = ret['to'];
        }
      });
    });
  }

}
