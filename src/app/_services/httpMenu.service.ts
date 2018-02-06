import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers,
  Request,
  RequestOptions,
  BaseRequestOptions,
  RequestMethod,
  RequestOptionsArgs
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { environment } from '../../environments/environment';

@Injectable()
export class HttpMenuService {

    API_URL = 'http://apicommondev/api/menu/completo'
    // API_URL = 'localhost:58829/api/menu/completo'
    menu = null
    constructor(private http:Http) {  }

    getMenu(): Observable<string>{

        let options = new RequestOptions();
        options.headers = new Headers();
        
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('Invsec-Version', '1');
        options.headers.append('Invsec-Channel', '1');
        // options.withCredentials = false;

        return new Observable<string>(
            observer => {
                this.http.get(this.API_URL, this.requestOptions()).subscribe(
                (response) => {
                  // console.log(environment.apiUrl + CONSTANTS.CONTRIBUTIOSNWITHDRAW);
                  observer.next(response.json());
                },
                (error: any) => {
                  // console.log(environment.apiUrl + CONSTANTS.CONTRIBUTIOSNWITHDRAW);
                  //observer.error(this.http.handlerError(error));
                  console.log('Error')
                }
              );
            }
          );
    }

    getMenuTest(): Observable<string> {
        return new Observable<string>(
          observer => {
            this.http.get('https://mindicador.cl/api').subscribe(
              (response) => {
                // console.log(environment.apiUrl + CONSTANTS.CONTRIBUTIOSNWITHDRAW);
                observer.next(response.json());
              },
              (error: any) => {
                // console.log(environment.apiUrl + CONSTANTS.CONTRIBUTIOSNWITHDRAW);
                //observer.error(this.http.handlerError(error));
                console.log('Error')
              }
            );
          }
        );
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
        options.headers.append('Invsec-Version', '1');
        options.headers.append('Access-Control-Expose-Headers', 'Content-Disposition');
        // if (sessionStorage.getItem('sessionId') !== null) {
        //   options.headers.append('X-XSRF-TOKEN', sessionStorage.getItem('sessionId'));
        // } else if (sessionStorage.getItem('sessionId2') !== null) {
        //   options.headers.append('Invsec-Token', sessionStorage.getItem('sessionId2'));
        // }
        options.withCredentials = false;
        return options;
      }
}