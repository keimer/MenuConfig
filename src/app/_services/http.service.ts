import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import { Cookie } from 'ng2-cookies';

import { environment } from '../../environments/environment';

@Injectable()
export class HttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.get(this.getFullUrl(url), this.requestOptions(options));
  }

  //get sin sesion
  getNoSs(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('FullUrl: ', this.getFullUrl(url));
    return super.get(this.getFullUrl(url), this.requestOptions(options));
  }

  // TODO: Borrar este metodo,  mock
  getJSON(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.get(url, this.requestOptions(options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie() && url != '/auth/login') {
      return this.noSessionResponse();
    }

    return super.post(this.getFullUrl(url), body, this.requestOptions(options));
  }

  postKey(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    // return super.post(this.getFullUrl(url), body, this.requestOptionsCaptcha(options));
    return super.post(this.getFullUrl(url), body, this.requestOptions(options));
  }

  postMicro(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.post(url, body, this.requestOptions(options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.put(this.getFullUrl(url), body, this.requestOptions(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.delete(this.getFullUrl(url), this.requestOptions(options));
  }

  getDoc(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (!this.validateCookie()) {
      return this.noSessionResponse();
    }

    return super.get(this.getFullUrlDoc(url), this.requestOptions(options));
  }

  public handlerError(err: Response) {
    const data = err.json();

    return JSON.parse(JSON.stringify({
      'message': data.message !== undefined ? data.message : (data.Message !== undefined ? data.Message : 'Error'),
      'status': err.status
    }));
  }

  private getFullUrl(url: string): string {
    //return environment.apiUrl + url;
    return 'apicommondev' + url
  }

  private getFullUrlDoc(url: string): string {
    //return environment.apiDocsUrl + url;
    return 'apicommondev' + url
  }

  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json; charset=UTF-8');
    options.headers.append('Invsec-Channel', '1');
    // options.headers.append('Invsec-Version', '1');
    // options.headers.append('Access-Control-Expose-Headers', 'Content-Disposition');
    // if (sessionStorage.getItem('sessionId') !== null) {
    //   options.headers.append('X-XSRF-TOKEN', sessionStorage.getItem('sessionId'));
    // } else if (sessionStorage.getItem('sessionId2') !== null) {
    //   options.headers.append('Invsec-Token', sessionStorage.getItem('sessionId2'));
    // }
    options.withCredentials = false;
    return options;
  }

  private requestOptionsCaptcha(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json; charset=UTF-8');
    options.headers.append('Invsec-Channel', '1');
    options.headers.append('Invsec-Version', '1');
    // w/cookie

    // if (Cookie.check(environment.tokenToRead)) {
    //   options.headers.append(environment.tokenToWriteCaptcha, Cookie.get(environment.tokenToReadCaptcha));
    // }
    // if (Cookie.check('XSRF-TOKEN')) {
    //   options.headers.append('X-XSRF-TOKEN', Cookie.get('XSRF-TOKEN'));
    // }

    // w/header
    if (sessionStorage.getItem('sessionId') !== null) {
      options.headers.append('X-XSRF-TOKEN', sessionStorage.getItem('sessionId'));
    } else if (sessionStorage.getItem('sessionId2') !== null) {
      options.headers.append('Invsec-Token', sessionStorage.getItem('sessionId2'));
    }

    return options;
  }

  private validateCookie() {
    return sessionStorage.getItem('sessionId') !== null || sessionStorage.getItem('sessionId2') !== null;
  }

  private noSessionResponse(): Observable<Response> {
    const response = {
      status: 401
    };
    console.log('error no session find');
    return Observable.create(observer => {
      observer.error(response);
      observer.complete();
    });
  }
}
