import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class Https {

  constructor(private http: HttpClient) {

  }

  get<T>(url: string, params: HttpParams, token?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);

    return this.http.get<T>(url, {
      params: params,
      headers: headers,
    });
  }

  getBySearchParams<T>(url: string, params: Map<string, any>, token?: string): Observable<T> {
    url = this.generateUrlParams(url, params);
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    return this.http.get<T>(url, {
      headers: headers
    });
  }

  post<T>(url: string, params: HttpParams, token?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    return this.http.post<T>(url, params, {
      headers: headers
    });
  }

  postByObj<T>(url: string, obj: Object, token?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    const params = new HttpParams();
    const keys = Object.keys(obj);
    keys.forEach(function (value, index) {
      params.set(value, obj[value]);
    });
    params.set('121', '212');
    console.log(obj);
    return this.http.post<T>(url, params, obj);
  }

  generateUrlParams(url: string, params: Map<string, any>): string {
    url = url + '?';
    params.forEach(function (value, key) {
      const param = key + '=' + value;
      url += param + '&';
    });
    return url;
  }
}
