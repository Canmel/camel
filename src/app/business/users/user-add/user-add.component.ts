import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  validateForm: FormGroup;

  formData: Map<string, string>;

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

  constructor(private httpClient: HttpClient, private fb: FormBuilder, private _notification: NzNotificationService, public route: Router) {
    this.formData = new Map<string, string>();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
        userName: [null, [Validators.required, Validators.maxLength(6)]],
        password: [null, [Validators.required, Validators.maxLength(6)]],
        email: [null, [Validators.required, Validators.email]],
        nickname: [null, [Validators.required, Validators.maxLength(6)]],
        mobile: [null, [Validators.required, Validators.pattern('^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$')]],
        description: [null, [Validators.maxLength(20)]]
      }
    );
  }

  createNotification(type, title, content) {
    this._notification.create(type,
      title,
      content
    );
  }

  backToList() {
    this.route.navigate(['/app/users']);
  }

  doSubmit() {
    console.log(this.formData);
    this.httpClient.post(Urls.USERS.SAVE,
      this.formData)
      .subscribe(
        (val) => {
          this._notification.success('成功', val['msg']);
          this.route.navigate(['/app/users']);
        },
        response => {
          this._notification.error('失败', response['msg']);
        });
  }

}
