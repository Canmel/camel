import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Https} from '../../../public/https.service';
import {Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Urls} from '../../../public/url';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {StatusHelper} from '../../../public/helper/statusHelper';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {

  reimbursements: Object[];

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

  constructor(public https: Https, public route: Router, private statusHelper: StatusHelper,
              private _notification: NzNotificationService,
              private modalService: BsModalService) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.REIMBURSEMENT.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    });
  }

  query() {
    this.params['currentPage'] = 1;
    this.https.get(Urls.REIMBURSEMENT.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }

  edit(obj: Object) {
    console.log(obj);
    this.route.navigate([Urls.BUSINESS.REIMBURSEMENT.EDIT], {queryParams: obj});
  }

  delete(template: TemplateRef<any>, id, name) {
    this.preDelete['name'] = name;
    this.preDelete['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  confirm() {
    this.https.delete(Urls.REIMBURSEMENT.DELETE, this.preDelete['id']).then(resp => {
      this._notification.success('提示', resp['msg']);
      this.query();
    }, errorResp => {
      this._notification.error('提示', errorResp['msg']);
    });
    this.decline();
  }

  newWorkFlowInstance(template: TemplateRef<any>, id, desc) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
    this.statusHelper.reimbursementFlows().then(
      resp => {
        alert(1);
        console.log(resp);
      }, errorResp => {
        this._notification.error('错误', errorResp['msg']);
      }
    );
  }

  decline() {
    this.modalRef.hide();
  }

  configParams(resp) {
    const page = resp['data'];
    this.reimbursements = page['records'];
    this.paginationParams.totalCount = page['total'];
    this.paginationParams.pageSize = page['size'];
    const totalPage = Math.ceil(this.paginationParams.totalCount / this.paginationParams.pageSize);
    this.paginationParams.totalPage = totalPage;
    this.paginationParams.currentPage = page['current'];
  }

  add() {
    this.route.navigate([Urls.BUSINESS.REIMBURSEMENT.ADD]);
  }

  pageChanged($event) {
    console.log($event);
    this.params['currentPage'] = $event['page'];
    this.https.get(Urls.REIMBURSEMENT.PAGEQUERY, this.params).then(data => {
      this.configParams(data);
    });
  }
}
