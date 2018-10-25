import {Http, Jsonp, Headers, BaseRequestOptions} from '@angular/http';
import {Injectable, ReflectiveInjector} from '@angular/core';
import {Urls} from './url';

@Injectable()
export class ToastrService {

  private urls = Urls; // 声明一个私有的变量

  constructor() {
  }

  successMsg(msg: string) {
    console.log(msg);
  }

}
