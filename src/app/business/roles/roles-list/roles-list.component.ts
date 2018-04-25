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

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    curPage: 1,
    nextText: '下一页',
    previousText: '上一页'
  };

  constructor(public https: Https, public route: Router,
              private _notification: NzNotificationService,
              private modalService: BsModalService) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.ROLES.PAGEQUERY, new HttpParams()).subscribe(data => {
      this.configParams(data);
    });
  }

  query() {
    this.params.clear();
    if ($('input[name="name"]').val() !== '') {
      this.params.set('name', $('input[name="name"]').val());
    }
    if ($('input[name="description"]').val() !== '') {
      this.params.set('description', $('input[name="description"]').val());
    }
    this.doQuery();
  }


  doQuery() {
    console.log(this.params);
    this.https.getBySearchParams(Urls.ROLES.PAGEQUERY, this.params).subscribe(data => {
      this.configParams(data);
    });
  }

  configParams(data) {
    this.roles = data['root'];
    this.paginationParams.totalCount = data['totalProperty'];
    let totalPage = this.paginationParams.totalCount / this.paginationParams.pageSize;
    totalPage = Math.trunc(totalPage) === totalPage ? totalPage : totalPage + 1;
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.curPage = data['pageNum'];
  }


}
