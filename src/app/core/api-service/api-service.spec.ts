import { TestBed } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { API_FORCAST_URL } from '../../constants';
import { ApiService } from './api-service';
import { PaginatedData } from './interfaces';


describe('api', () => {
  describe('ApiService', () => {

    let backend: MockBackend;
    let service: ApiService;


    beforeEach(() => {
      let injector = TestBed.configureTestingModule({
        providers: [
          ApiService,
          BaseRequestOptions,
          MockBackend,
          {
            provide: Http,
            deps: [MockBackend, BaseRequestOptions],
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions): Http => {
              return new Http(backend, options);
            }
          }
        ]
      });

      backend = injector.get(MockBackend);
      service = injector.get(ApiService);
    });


    afterEach(() => backend.verifyNoPendingRequests());


    describe('requestArgs()', () => {
      it('should set RequestArgs.url with provided url', () => {
        let requestArgs = service.requestArgs({url: API_FORCAST_URL});
        expect(requestArgs.url).toBe(API_FORCAST_URL);
      });

      it('should set RequestArgs.method to RequestMethod.Get by default', () => {
        let requestArgs = service.requestArgs({url: API_FORCAST_URL});
        expect(requestArgs.method).toEqual(RequestMethod.Get);
      });

      it('should set RequestArgs.method with provided method', () => {
        let requestArgs = service.requestArgs({method: RequestMethod.Post, url: API_FORCAST_URL});
        expect(requestArgs.method).toEqual(RequestMethod.Post);
      });
    });


    describe('requests', () => {
      let paginatedDataResponse;
      let locationNumber;

      beforeEach(() => {
        locationNumber = 123;

        paginatedDataResponse = new Response(new ResponseOptions({
          body: JSON.stringify({collection: []})
        }));
      });

      describe('fetch()', () => {
        it('should perform GET request to provided url', () => {
          backend.connections.subscribe((c: MockConnection) => {
            expect(c.request.method).toBe(RequestMethod.Get);
            expect(c.request.url).toMatch(API_FORCAST_URL);
          });

          service.fetch(API_FORCAST_URL);
        });

        it('should return response data', () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(paginatedDataResponse));
          service.fetch(API_FORCAST_URL)
            .subscribe((res: PaginatedData) => {
              expect(res).toBeDefined();
              expect(Array.isArray(res.collection)).toBe(true);
            });
        });
      });

      describe('fetchForcast()', () => {
        it('should perform GET request to provided url', () => {
          backend.connections.subscribe((c: MockConnection) => {
            expect(c.request.method).toBe(RequestMethod.Get);
            expect(c.request.url).toMatch(`${API_FORCAST_URL}/${locationNumber}`);
          });

          service.fetchForcast(locationNumber);
        });

        it('should return response data', () => {
          backend.connections.subscribe((c: MockConnection) => c.mockRespond(paginatedDataResponse));
          service.fetchForcast(locationNumber)
            .subscribe((res: PaginatedData) => {
              expect(res).toBeDefined();
              expect(Array.isArray(res.collection)).toBe(true);
            });
        });
      });
    });
  });
});
