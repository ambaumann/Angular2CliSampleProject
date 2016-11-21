import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_FORCAST_URL } from '../../constants';
import { PaginatedData, RequestArgs, RequestOptions } from './interfaces';


@Injectable()
export class ApiService {
  headers: Headers;

  constructor(private http: Http) {
    this.http = http;
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');

  }

  fetch(url: string): Observable<any> {
    return this.request({url});
  }

  fetchForcast(locationNumber: number): Observable<any> {
    return this.request({
      url: `${API_FORCAST_URL}/${locationNumber}`
    });
  }

  request(options: RequestOptions): Observable<any> {
    const req: Request = new Request(this.requestArgs(options));
    return this.http.request(req, this.headers)
      .map((res: Response) => res.json());
  }

  requestArgs(options: RequestOptions): RequestArgs {
    const { method, url } = options;

    return {
      method: method || RequestMethod.Get,
      url
    };
  }
}
