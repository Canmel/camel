import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Https} from '../../../public/https.service';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Urls} from '../../../public/url';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Menu} from '../../../public/entity/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Menu[];

  params: Map<string, any>;

  modalRef: BsModalRef;

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
              private _notification: NzNotificationService,
              private modalService: BsModalService) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.MENUS.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    });
  }

  query() {
    this.params['currentPage'] = 1;
    this.https.get(Urls.MENUS.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }

  edit(obj: Object) {
    console.log(obj);
    this.route.navigate([Urls.BUSINESS.MENUS.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  confirm() {
    this.https.delete(Urls.MENUS.DELETE, this.preDelete['id']).then(resp => {
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

  configParams(data) {
    this.menus = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = data['pageNum'];
  }

  toAddMenu() {
    this.route.navigate([Urls.BUSINESS.MENUS.ADD]);
  }

  pageChanged($event) {
    console.log($event);
    this.params['currentPage'] = $event['page'];
    this.https.get(Urls.MENUS.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }
}
