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
import {WorkFlow} from '../../../public/entity/workFlow';

@Component({
  selector: 'app-work-flow-list',
  templateUrl: './work-flow-list.component.html',
  styleUrls: ['./work-flow-list.component.css']
})
export class WorkFlowListComponent implements OnInit {

  params: Map<string, any>;

  workFlows: WorkFlow[];

  preDelete = {};

  prePublish = {};

  modalRef: BsModalRef;

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
    this.https.get(Urls.WORKFLOW.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    }, errorResp => {
      this._notification.error('错误', errorResp['msg']);
    });
  }

  configParams(resp) {
    const page = resp['data'];
    this.workFlows = page['records'];
    this.paginationParams.totalCount = page['total'];
    this.paginationParams.pageSize = page['size'];
    const totalPage = Math.ceil(this.paginationParams.totalCount / this.paginationParams.pageSize);
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = page['current'];
  }

  query() {
    this.params['currentPage'] = 1;
    this.https.get(Urls.WORKFLOW.PAGEQUERY, this.params).then(resp => {
      this.configParams(resp);
    }, errorResp => {
      this._notification.error('错误', errorResp['msg']);
    });
  }

  toAddFlow() {
    this.route.navigate([Urls.BUSINESS.FLOWS.ADD]);
  }

  edit(obj: Object) {
    this.route.navigate([Urls.BUSINESS.WORKFLOW.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  confirm() {
    this.https.delete(Urls.WORKFLOW.DELETE, this.preDelete['id']).then(resp => {
      this._notification.success('提示', resp['msg']);
      this.query();
    }, errorResp => {
      this._notification.error('提示', errorResp['msg']);
    });
    this.decline();
  }

  toPublish(template: TemplateRef<any>, id, name) {
    this.prePublish['name'] = name;
    this.prePublish['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  publish() {
    this.https.get(Urls.WORKFLOW.PUBLISH + this.prePublish['id']).then(resp => {
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
}
