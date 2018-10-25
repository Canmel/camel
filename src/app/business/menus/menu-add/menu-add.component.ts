import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {Https} from '../../../public/https.service';
import {Urls} from '../../../public/url';
import {Menu} from '../../../public/entity/menu';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {
  validateForm: FormGroup;

  formData: Object;

  menuLevels: {};

  tops: Array<Menu>;


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
              private _notification: NzNotificationService,
              public route: Router) {
    this.formData = {};
    this.http.get(Urls.OPTIONS.MENUS.LEVEL).then(data => {
      this.menuLevels = data['data'];
      console.log(this.menuLevels);
    });
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
        name: [null, [Validators.required, Validators.maxLength(6)]],
        menuLevel: [null, Validators.required],
        topMenu: [null, Validators.required],
        description: [null, [Validators.maxLength(20)]],
        address: [null, [Validators.required, Validators.maxLength(24)]]
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
    console.log(this.formData['level']);
    if (this.formData['level'] === 2) {
      this.http.get(Urls.MENUS.TOPMENUS).then(resp => {
        this.tops = resp['data'];
      });
      $('#topMenu').show();
      this.validateForm.setControl('topMenu', this.fb.control(null, Validators.required));

    } else {
      $('#topMenu').hide();
      this.validateForm.setControl('topMenu', this.fb.control(null));
    }
  }

  doSubmit() {
    this.http.post(Urls.MENUS.SAVE,
      this.formData)
      .then(
        (val) => {
          this._notification.success('成功', val['msg']);
          this.route.navigate([Urls.BUSINESS.MENUS.LIST]);
        },
        response => {
          this._notification.error('失败', response['msg']);
        });
  }
}
