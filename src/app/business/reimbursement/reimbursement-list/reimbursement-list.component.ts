import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  validateForm: FormGroup;

  preDelete = {};

  preLaunch = {};

  formData = {};

  reimbursementFlows = [];

  isSyncVisible = false;

  isVisible = false;

  isConfirmLoading = false;


  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    currentPage: 1,
    nextText: '下一页',
    previousText: '上一页'
  };

  constructor(public https: Https, public route: Router, private statusHelper: StatusHelper,
              private _notification: NzNotificationService, private fb: FormBuilder,
              private modalService: BsModalService) {
    this.params = new Map<string, any>();
  }

  ngOnInit() {
    this.https.get(Urls.REIMBURSEMENT.PAGEQUERY, {}).then(data => {
      this.configParams(data);
    });

    this.validateForm = this.fb.group({
        reimbursementFlows: [null, [Validators.required, Validators.maxLength(6)]],
        description: [null, [Validators.required, Validators.maxLength(20)]]
      }
    );
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
    this.isSyncVisible = true;
    this.statusHelper.reimbursementFlows().then(
      resp => {
        console.log(resp);
        this.reimbursementFlows = resp['data'];
      }, errorResp => {
        this._notification.error('错误', errorResp['msg']);
      }
    );
    // 设为只读
    $('.form-disabled').find('input').attr('readonly', 'readonly');
    this.formData['businessId'] = id;
    this.formData['description'] = desc;
  }

  decline() {
    this.modalRef.hide();
  }

  nzOnCancel() {
    this.isVisible = false;
    this.isSyncVisible = false;
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

  _submitForm() {
    let isValid = true;
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        if (this.validateForm.status === 'INVALID') {
          this.validateForm.controls[i].markAsDirty();
          isValid = false;
        }
      }
    }
    if (!isValid) {
      this._notification.error('表单验证错误', '表单信息错误，请检查表单');
      return isValid;
    } else {
      this.doSubmit();
    }
  }

  doSubmit() {
    this.isVisible = false;
    this.isSyncVisible = false;
    this.https.post(Urls.WORKFLOW.INSTANCE.SAVE, this.formData).then(
      resp => {
        this._notification.success('成功', resp['msg']);
        console.log(resp);
      }, errorResp => {
        console.log(errorResp);
        this._notification.error('错误', errorResp['msg']);
      }
    );
  }

  launch(template: TemplateRef<any>, id, name) {
    this.preLaunch['name'] = name;
    this.preLaunch['id'] = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-position'});
  }

  /**
   * 发布流程
   */
  launchConfirm() {
    alert('22');
  }
}
