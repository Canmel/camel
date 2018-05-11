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
    });
  }

  configParams(data) {
    this.workFlows = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = data['pageNum'];
  }

  toAddFlow() {
    this.route.navigate([Urls.BUSINESS.FLOWS.ADD]);
  }

  edit(obj: Object) {
    this.route.navigate([Urls.BUSINESS.WORKFLOW.EDIT], {queryParams: obj});
  }
}
