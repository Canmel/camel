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

  postByMap<T>(url: string, map: Map<string, string>, token?: string): Observable<T> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('x-auth-token', token);
    const p = this.object2Param(map);
    return this.http.post<T>(url, p, {
      headers: headers
    });
  }

  generateUrlParams(url: string, params: Map<string, any>): string {
    url = url + '?';
    params.forEach(function (value, key) {
      const param = key + '=' + value;
      url += param + '&';
    });
    return url;
  }

  object2Param(obj: Map<string, string>) {
    const params = new HttpParams();
    obj.forEach(function (value, key) {
      params.set(key, value);
    });
    return params;
  }
}
