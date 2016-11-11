import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_FORCAST_URL } from '../../constants';
import { PaginatedData, RequestArgs, RequestOptions } from './interfaces';


@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  fetch(url: string): Observable<any> {
    return this.request({url});
  }

  fetchForcast(locationNumber: number): Observable<PaginatedData> {
    return this.request({
      url: `${API_FORCAST_URL}/${locationNumber}`
    });
  }

  request(options: RequestOptions): Observable<any> {
    const req: Request = new Request(this.requestArgs(options));
    return this.http.request(req)
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
