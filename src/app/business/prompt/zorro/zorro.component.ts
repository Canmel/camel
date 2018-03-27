import {Component, OnInit} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-zorro',
  templateUrl: './zorro.component.html',
  styleUrls: ['./zorro.component.css']
})
export class ZorroComponent implements OnInit {

  isVisible = false;

  isSyncVisible = false;

  isConfirmLoading = false;

  showModal() {
    this.isVisible = true;
  }

  showSyncModal() {
    this.isSyncVisible = true;
  }

  handleOk(e) {
    console.log('点击了确定');
    this.isVisible = false;
    this.isSyncVisible = false;
  }

  handleCancel(e) {
    console.log(e);
    this.isVisible = false;
    this.isSyncVisible = false;
  }

  createNotification(type) {
    this._notification.create(type,
      '这是标题',
      '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案'
    );
  }

  handleOkAsync(e) {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isConfirmLoading = false;
      this.isSyncVisible = false;
    }, 3000);
  }

  constructor(private _notification: NzNotificationService) {
  }

  ngOnInit() {
  }

}
