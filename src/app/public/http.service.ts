import {Http, Jsonp, Headers, BaseRequestOptions} from '@angular/http';
import {Injectable, ReflectiveInjector} from '@angular/core';
import {Urls} from './url';

@Injectable()
export class HttpService {

  private urls = Urls; // 声明一个私有的变量

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  get(url: string, params: any): Promise<Object> {
    url = this.checkPrams(url, params);
    return this.http.get(url).toPromise().then(res => res.json() as Object).catch(this.handleError);
  }

  post(url: string, params: any): Promise<Object> {
    return this.http.post(url, params).toPromise().then(res => res.json() as Object).catch(this.handleError);
  }

  put(url: string, params: any): Promise<Object> {
    return this.http.put(url, params).toPromise().then(res => res.json() as Object).catch(this.handleError);
  }

  delete(url: string, params: any): Promise<Object> {
    return this.http.delete(url, params).toPromise().then(res => res.json() as Object).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error messages -----> : ', error);
    return Promise.reject(error);
  }

  private checkPrams(url: string, params: any): string {
    url = url + '?';
    for (const item in params) {
      if (item != null) {
        url = url.concat(item + '=' + params[item] + '&');
      }
    }
    return url.substring(0, url.length - 1);

  }
}
