import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Https} from '../../../public/https.service';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Role} from '../../../public/entity/role';
import {Urls} from '../../../public/url';
import * as $ from 'jquery';


@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles: Role[];

  params: Map<string, any>;

  modalRef: BsModalRef;

  preDelete = {};

  roleDetail = {};

  subMenus = [];

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
              private _notification: NzNotificationService,
              private modalService: BsModalService) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.ROLES.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    });
  }

  query() {
    this.params['currentPage'] = 1;
    this.https.get(Urls.ROLES.PAGEQUERY, this.params).then(data => {
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
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  addMenus(template: TemplateRef<any>, id) {
    this.https.get(Urls.MENUS.SUBS).then(resp => {
      this.subMenus = resp['root'];
      this.https.get(Urls.ROLES.DETAILS + id).then(details => {
        this.roleDetail = details['root'];
        const sd = [];
        this.subMenus.forEach(function (val) {
          sd.push({
            key: val['id'],
            title: val['name'],
            direction: 'right'
          });
        });
        if (this.roleDetail['menus']) {
          this.roleDetail['menus'].forEach(menu => {
            sd.forEach(function (value, index) {
              if (value['key'] === menu['id']) {
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
    this.updateMenuList(ret);
  }

  confirm() {
    this.https.delete(Urls.ROLES.DELETE, this.preDelete['id']).then(resp => {
      this.modalRef.hide();
      if (resp['code'] !== 200) {
        this._notification.error('提示', '删除角色 ' + this.preDelete['name'] + ' 失败！');
      } else {
        this._notification.success('提示', '角色 ' + this.preDelete['name'] + ' 已被删除！');
      }
      this.query();
    });
  }

  menusConfirm() {
    const menuIds = [];
    this.list.forEach(function (value, index, array) {
      if (value['direction'] === 'left') {
        menuIds.push(value['key']);
      }
    });
    this.roleDetail['menuIds'] = menuIds;
    this.https.post(Urls.ROLES.UPDATEMENUS, this.roleDetail).then(resp => {
      this._notification.success('成功', resp['msg']);
    });
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }

  configParams(data) {
    this.roles = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = data['pageNum'];
  }

  toAddRole() {
    this.route.navigate([Urls.BUSINESS.ROLES.ADD]);
  }

  updateMenuList(ret: any) {
    if (ret['list'] == null) {
      return this.list;
    }
    this.list.forEach(function (menu) {
      ret['list'].forEach(function (c) {
        if (c['key'] === menu['key']) {
          menu.direction = ret['to'];
        }
      });
    });
  }
}
