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
  selector: 'app-work-flow-list',
  templateUrl: './work-flow-list.component.html',
  styleUrls: ['./work-flow-list.component.css']
})
export class WorkFlowListComponent implements OnInit {

  params: Map<string, any>;

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
  }

  toAddFlow() {
    this.route.navigate([Urls.BUSINESS.FLOWS.ADD]);
  }
}
