import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router, ActivatedRoute} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  validateForm: FormGroup;

  formData = {};

  _submitForm() {
    // this.doSubmit();
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

  constructor(public https: Https,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _notification: NzNotificationService,
              public route: Router) {
    this.formData = new Map<string, string>();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
        userName: [null, [Validators.required, Validators.maxLength(6)]],
        email: [null, [Validators.required, Validators.email]],
        nickname: [null, [Validators.required, Validators.maxLength(6)]],
        mobile: [null, [
          Validators.required,
          Validators.pattern('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$')
        ]],
        description: [null, [Validators.maxLength(20)]]
      }
    );
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.formData['id'] = queryParams['id'];
    });
    this.https.get(Urls.USERS.DETAILS + this.formData['id']).then(resp => {
      const userDetails = resp['obj'];
      this.formData = userDetails;
    });
  }

  createNotification(type, title, content) {
    this._notification.create(type,
      title,
      content
    );
  }

  backToList() {
    this.route.navigate([Urls.BUSINESS.USERS.LIST]);
  }

  doSubmit() {
    console.log(this.formData);
    this.https.put(Urls.USERS.EDIT + this.formData['id'],
      this.formData
    ).then(
      (val) => {
        this._notification.success('成功', val['msg']);
        this.route.navigate([Urls.BUSINESS.USERS.LIST]);
      },
      response => {
        this._notification.error('失败', response['msg']);
      });
  }

}
