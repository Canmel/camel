import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router, ActivatedRoute} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css']
})
export class RolesEditComponent implements OnInit {

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
        rolename: [null, [Validators.required, Validators.maxLength(6)]],
        description: [null, [Validators.maxLength(20)]]
      }
    );
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.formData['id'] = queryParams['id'];
    });
    this.https.get(Urls.ROLES.DETAILS + this.formData['id']).then(resp => {
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
    this.route.navigate([Urls.BUSINESS.ROLES.LIST]);
  }

  doSubmit() {
    console.log(this.formData);
    this.https.put(Urls.USERS.EDIT + this.formData['id'],
      this.formData
    ).then(
      (val) => {
        this._notification.success('成功', val['msg']);
        this.route.navigate([Urls.BUSINESS.ROLES.LIST]);
      },
      response => {
        this._notification.error('失败', response['msg']);
      });
  }
}
