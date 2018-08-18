import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {StatusHelper} from '../../../public/helper/statusHelper';
import {Https} from '../../../public/https.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Urls} from '../../../public/url';

declare var $: any;

@Component({
  selector: 'app-work-flow-edit',
  templateUrl: './work-flow-edit.component.html',
  styleUrls: ['./work-flow-edit.component.css']
})
export class WorkFlowEditComponent implements OnInit {

  formData: Object;

  currentModal;

  validateForm: FormGroup;

  workFlowType: Array<any>;

  constructor(private fb: FormBuilder, private modalService: NzModalService, private _notification: NzNotificationService,
              private statusHelper: StatusHelper, private http: Https, private route: Router, private activatedRoute: ActivatedRoute) {
    this.formData = {};

    this.statusHelper.workflowType().then(onfulfilled => {
      console.log('helper', onfulfilled['data']);
      this.workFlowType = onfulfilled['data'];
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.formData['id'] = queryParams['id'];
    });

    this.validateForm = this.fb.group({
        flowName: [null, [Validators.required, Validators.maxLength(12)]],
        flow: [null, []],
        workflowType: [null, [Validators.required]]
      }
    );

    const ms = this.modalService;

    this.http.get(Urls.WORKFLOW.DETAILS + this.formData['id']).then(onfulfilled => {
      this.formData = onfulfilled['data'];
      this.initFlow();
    }, errorResp => {
      this._notification.error('错误', errorResp['msg']);
    });


  }

  initFlow() {
    const fdate = this.formData;
    $('#myflow').myflow(
      {
        basePath: '',
        restore: eval('(' + this.formData['flow'] + ')'),
        tools: {
          save: {
            onclick: function (data) {
              fdate['flow'] = data;
              $('#flow').val(data);
            }
          }
        }
      });
  }

  toSave(titleTpl, contentTpl) {
    this.currentModal = this.modalService.open({
      title: titleTpl,
      content: contentTpl,
      footer: null,
      maskClosable: false,
      onOk() {
        console.log('Click ok');
      }
    });
  }

  cancel() {
    this.currentModal.destroy();
  }

  _submitForm() {
    console.log('这是我的提交数据', this.formData);
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
    console.log(this.formData);
    this.http.put(Urls.WORKFLOW.EDIT + this.formData['id'], this.formData).then(
      (val) => {
        this._notification.success('成功', val['msg']);
        this.currentModal.destroy();
        this.route.navigate([Urls.BUSINESS.WORKFLOW.LIST]);
      },
      response => {
        this._notification.error('失败', response['msg']);
      }
    );
  }

  backToList() {
    this.route.navigate([Urls.BUSINESS.WORKFLOW.LIST]);
  }
}
