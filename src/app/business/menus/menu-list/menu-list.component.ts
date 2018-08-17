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
    this.route.navigate([Urls.BUSINESS.MENUS.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  confirm() {
    this.https.delete(Urls.MENUS.DELETE, this.preDelete['id']).then(resp => {
      this._notification.success('提示', resp['msg']);
      this.query();
    }, errorResp => {
      this._notification.error('提示', errorResp['msg']);
    });
    this.decline();
  }

  decline() {
    this.modalRef.hide();
  }

  configParams(resp) {
    const page = resp['data'];
    this.menus = page['records'];
    this.paginationParams.totalCount = page['total'];
    this.paginationParams.pageSize = page['size'];
    const totalPage = Math.ceil(this.paginationParams.totalCount / this.paginationParams.pageSize);
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = page['current'];
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
