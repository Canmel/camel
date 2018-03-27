import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-zorro-valid',
  templateUrl: './zorro-valid.component.html',
  styleUrls: ['./zorro-valid.component.css'],
  styles: [`
    .login-form {
      max-width: 300px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `]
})
export class ZorroValidComponent implements OnInit {

  validateForm: FormGroup;

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
    }
  }

  constructor(private fb: FormBuilder, private _notification: NzNotificationService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]],
      remember: [true],
    });
  }

  createNotification(type, title, content) {
    this._notification.create(type,
      title,
      content
    );
  }

}
