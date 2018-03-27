import {Component, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  providers: []
})
export class TipsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // infoTips() {
  //   initScript.infoMsg('自定义提示信息标题', '自定义信息提示');
  // }
  //
  // successTips() {
  //   initScript.successMsg('自定义提示信息标题', '自定义成功信息');
  // }
  //
  // dangerTips() {
  //   initScript.errorMsg('自定义提示信息标题', '自定义错误信息');
  // }
  //
  // modalCommit(contentSelector) {
  //   console.log('commit callback，modal context dom id:', contentSelector);
  // }
  //
  // modalClosed(contentSelector) {
  //   console.log('close callback，modal context dom id:', contentSelector);
  // }
}
