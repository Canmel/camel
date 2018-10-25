import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {Urls} from './url';
import {Properties} from './properties';

@Injectable()
export class Https {

  constructor(private http: HttpClient, public router: Router) {

  }


  /**
   * get 类型的请求
   * @param {string} url
   * @param {Object} params
   * @param {string} token
   * @returns {Promise<void | Object>}
   */
  get<T>(url: string, params?: Object, token?: string): Promise<void | Object> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    if (sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN)) {
      if (!params) {
        params = {};
      }
      params['access_token'] = sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN);
    }
    if (params) {
      url = this.objAppendToUrl(url, params);
    }

    return this.http.get<T>(url, {
      headers: headers
    }).toPromise()
      .catch(errorResp => {
        if (errorResp.status === 200) {
          return Promise.resolve({text: errorResp.error.text, httpStatus: 200});
        }
        return Promise.reject(errorResp.error);
      })
      .then(onfulfilled => {
        if (200 === onfulfilled['httpStatus']) {
          return Promise.resolve(onfulfilled);
        }
        if (404 === onfulfilled['httpStatus']) {
          alert('未找到请求页面');
        }
        alert('请求出错');
      });
  }

  /**
   * 发送post类型请求
   * @param {string} url
   * @param {Object} params
   * @param {string} token
   * @returns {Promise<void | Object>}
   */
  post<T>(url: string, params: Object, token?: string): Promise<void | Object> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    if (sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN)) {
      url = url + '?access_token=' + sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN);
    }
    return this.http.post<T>(url, params, {
      headers: headers
    }).toPromise().catch(error => {
      if (error['status'] === 401) {
        this.router.navigate(['login']);
      }
      return Promise.reject(error['error']);
    }).then(onfulfilled => {
      if (200 === onfulfilled['httpStatus']) {
        return Promise.resolve(onfulfilled);
      }
      if (404 === onfulfilled['httpStatus']) {
        return Promise.reject(onfulfilled);
      }
      return Promise.reject(onfulfilled);
    });
  }

  /**
   * 发送put请求
   * @param {string} url
   * @param {Object} params
   * @param {string} token
   * @returns {Promise<void | Object>}
   */
  put<T>(url: string, params: Object, token?: string): Promise<void | Object> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    if (sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN)) {
      url = url + '?access_token=' + sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN);
    }
    return this.http.put<T>(url, params, {
      headers: headers
    }).toPromise().catch(errorResp => {
      if (errorResp.url.endsWith(Urls.SESSION.REJECTED)) {
        this.router.navigate(['login']);
      }
      return Promise.reject(errorResp.error);
    }).then(onfulfilled => {
      if (200 === onfulfilled['httpStatus']) {
        return Promise.resolve(onfulfilled);
      }
      return Promise.reject(onfulfilled);
    });
  }

  delete<T>(url: string, params, token?: string): Promise<void | Object> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    // headers.append('x-auth-token', token);
    url = url + params;
    if (sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN)) {
      url = url + '?access_token=' + sessionStorage.getItem(Properties.STRING.SESSION.ACCESS_TOKEN);
    }
    return this.http.delete(url, {
      headers: headers
    }).toPromise().catch(errorResp => {
      return Promise.reject(errorResp.error);
    }).then(onfulfilled => {
      if (200 === onfulfilled['httpStatus']) {
        return Promise.resolve(onfulfilled);
      }
      return Promise.reject(onfulfilled);
    });

  }

  objToParams(obj: Object) {
    if (Object.keys(obj).length === 0) {
      return new HttpParams();
    }
    const params = new HttpParams();
    Object.keys(obj).forEach(function (key) {
      params.set(key, obj[key]);
    });
    return params;
  }

  private mapToParams(map: Map<string, any>): HttpParams {
    console.log('将map转化为params', map);
    const httpParams = new HttpParams();
    map.forEach(function (value, key) {
      httpParams.set(key, value);
    });
    return httpParams;
  }

  private objAppendToUrl(url: string, obj: Object): string {
    console.log('将map转化为Url', obj);
    url = url + '?';
    Object.keys(obj).forEach(function (key) {
      const param = key + '=' + obj[key];
      url += param + '&';
    });
    if (url.endsWith('&')) {
      url.substr(0, url.length - 1);
    }
    return url;
  }
}
