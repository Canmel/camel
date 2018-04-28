import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router, ActivatedRoute} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Https} from '../../../public/https.service';
import {BsModalService} from 'ngx-bootstrap/modal';
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

  modalRef: BsModalRef;

  subMenus: Array<any>;

  list: any[] = [];

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
              private modalService: BsModalService,
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
      const userDetails = resp['root'];
      this.formData = userDetails;
    });

    this.https.get(Urls.MENUS.SUBS).then(resp => {
      this.subMenus = resp['root'];

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
    this.https.put(Urls.ROLES.EDIT + this.formData['id'],
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

  addMenus(template: TemplateRef<any>) {
    const sd = [];
    this.subMenus.forEach(function (val) {
      sd.push({
        key: val['id'],
        title: val['name'],
        direction: 'right'
      });
    });
    if (this.formData['menus']) {
      this.formData['menus'].forEach(menu => {

        sd.forEach(function (value, index, array) {
          if (value['key'] === menu['id']) {
            sd[index].direction = 'left';
          }
        });
      });
    }
    this.list = sd;
    this.modalRef = this.modalService.show(template, {class: 'modal-md modal-position'});
  }

  select(ret: any) {
    console.log('nzSelectChange', ret);
  }

  change(ret: any) {
    this.updateMenuList(ret);
  }

  confirm() {
    const menuIds = [];
    this.list.forEach(function (value, index, array) {
      menuIds.push(value['key']);
    });
    this.formData['menuIds'] = menuIds;
    this.https.post(Urls.ROLES.UPDATEMENUS, this.formData).then(resp => {
      console.log('-----', resp);
    });
  }

  decline() {
    this.modalRef.hide();
  }

  updateMenuList(ret: any) {
    if (ret['list'] == null) {
      return this.list;
    }
    this.list.forEach(function (menu) {
      ret['list'].forEach(function (c) {
        if (c['key'] === menu['key']) {
          menu.direction = ret['to'];
        }
      });
    });
  }
}
