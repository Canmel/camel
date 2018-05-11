import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';

@Component({
  selector: 'app-reimbursement-edit',
  templateUrl: './reimbursement-edit.component.html',
  styleUrls: ['./reimbursement-edit.component.css']
})
export class ReimbursementEditComponent implements OnInit {

  validateForm: FormGroup;

  formData: Object;

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
      this.createNotification('error', '表单验证错误', '表单信息错误，请检查表单');
      return isValid;
    } else {
      this.doSubmit();
    }
  }

  constructor(private http: Https,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _notification: NzNotificationService,
              public route: Router) {
    this.formData = {};
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
        name: [null, [Validators.required, Validators.maxLength(6)]],
        description: [null, [Validators.maxLength(20)]],
        target: [null, [Validators.required, Validators.maxLength(24)]]
      }
    );
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.formData['id'] = queryParams['id'];
    });
    this.http.get(Urls.REIMBURSEMENT.DETAILS + this.formData['id']).then(resp => {
      const reimbursmentDetails = resp['root'];
      this.formData = reimbursmentDetails;
    });
  }

  createNotification(type, title, content) {
    this._notification.create(type,
      title,
      content
    );
  }

  backToList() {
    this.route.navigate([Urls.BUSINESS.REIMBURSEMENT.LIST]);
  }

  doSubmit() {
    this.http.put(Urls.REIMBURSEMENT.EDIT + this.formData['id'], this.formData)
      .then(
        (val) => {
          this._notification.success('成功', val['msg']);
          this.route.navigate([Urls.BUSINESS.REIMBURSEMENT.LIST]);
        },
        response => {
          this._notification.error('失败', response['msg']);
        });
  }
}

