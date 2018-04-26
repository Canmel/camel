import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class HttpclientService {

  constructor(private httpClient: HttpClient, public router: Router) {
  }

  get(url: string, params: any): Promise<void | Object> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    return this.httpClient.get(url, params).toPromise().catch(error => {
      console.log('出现错误信息-->', error);
      this.router.navigate(['login']);
    }).then(onfulfilled => {
      console.log('请求完成 --->', onfulfilled);
      return onfulfilled;
    }, onrejected => {
      console.log('请求被拒绝--> ', onrejected);
    });
  }

  private respFilter(resp): Promise<any> {
    console.log('稍微拦截下', resp);
    return Promise.reject(resp);
  }

  private handleError(error: any) {
    console.error('error me1ssages -----> : ', error);
    this.router.navigate(['login']);
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
