import {Component, OnInit} from '@angular/core';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusHelper} from '../../../public/helper/statusHelper';
import {Https} from '../../../public/https.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Urls} from '../../../public/url';
import {DomSanitizer} from '@angular/platform-browser';

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

  contentHeight = 500;

  public saveHref;

  public saveName = '';

  private readonly newDiagram = 'assets/bpmn/diagram.xml';

  private modeler;

  constructor(private fb: FormBuilder, private modalService: NzModalService, private _notification: NzNotificationService,
              private statusHelper: StatusHelper, private http: Https, private route: Router, private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) {
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
    this.initContentHeight();
    $('.with-diagram').height(this.contentHeight);
    this.validateForm = this.fb.group({
        flowName: [null, [Validators.required, Validators.maxLength(12)]],
        flow: [null, []],
        workflowType: [null, [Validators.required]]
      }
    );
    const ms = this.modalService;

    this.http.get(Urls.WORKFLOW.DETAILS + this.formData['id']).then(onfulfilled => {
      this.formData = onfulfilled['data'];
      console.log(this.formData);
      this.initBpmn();
    }, errorResp => {
      this._notification.error('错误', errorResp['msg']);
    });

  }

  initContentHeight() {
    this.contentHeight = $('body').height() - $('header').height() - $('footer').height() - 136;
  }

  initBpmn() {
    this.createDiagram();
  }

  createDiagram() {
    this.importDiagram(this.newDiagram);
  }


  importDiagram(xml) {
    this.modeler = initScript.initBpmn();
    this.modeler.importXML(this.formData['flow']);
  }

  saveDiagram(e, titleTpl, contentTpl) {
    this.modeler.saveXML({format: true}, (err, xml) => {
      if (err) {
        console.error(err);
      } else {
        this.setEncoded(xml, 'bpmn.xml');
        this.formData['flow'] = xml;
        this.toSave(titleTpl, contentTpl);
      }
    });
    e.preventDefault();
    e.stopPropagation();
  }

  // initFlow() {
  //   const fdate = this.formData;
  //   $('#myflow').myflow(
  //     {
  //       basePath: '',
  //       restore: eval('(' + this.formData['flow'] + ')'),
  //       tools: {
  //         save: {
  //           onclick: function (data) {
  //             fdate['flow'] = data;
  //             $('#flow').val(data);
  //           }
  //         }
  //       }
  //     });
  // }

  setEncoded(data, name) {
    const encodedData = encodeURIComponent(data);

    if (data) {
      this.saveHref = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/bpmn20-xml;charset=UTF-8,' + encodedData);
      this.saveName = name;
    }
  }

  toSave(titleTpl, contentTpl) {
    // this.currentModal = this.modalService.open({
    //   title: titleTpl,
    //   content: contentTpl,
    //   footer: null,
    //   maskClosable: false,
    //   onOk() {
    //     console.log('Click ok');
    //   }
    // });
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
