import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {
  validateForm: FormGroup;

  formData: Object;

  menuStatuses: {};

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

  constructor(private http: Https,
              private fb: FormBuilder,
              private _notification: NzNotificationService,
              public route: Router) {
    this.formData = {};
  }

  ngOnInit() {
    this.http.get(Urls.OPTIONS.MENUS.LEVEL).then(data => {
      this.menuStatuses = data['root'];
      console.log(this.menuStatuses);
    });
    this.validateForm = this.fb.group({
        name: [null, [Validators.required, Validators.maxLength(6)]],
        menuStatus: [null, Validators.required],
        description: [null, [Validators.maxLength(20)]],
        target: [null, [Validators.required, Validators.maxLength(24)]]
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
    this.route.navigate([Urls.BUSINESS.MENUS.LIST]);
  }

  changeMenuLevel() {
    alert(this.formData['level']);
  }

  doSubmit() {
    this.http.post(Urls.ROLES.SAVE,
      this.formData)
      .then(
        (val) => {
          this._notification.success('成功', val['msg']);
          this.route.navigate([Urls.BUSINESS.ROLES.LIST]);
        },
        response => {
          this._notification.error('失败', response['msg']);
        });
  }
}
