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

import { environment } from '../../environments/environment';
import { CONSTANTS } from '../_models/constants';

@Injectable()
export class HttpMenuService {

    // API_URL = 'http://apicommonFix/api/menu/completo'
    // API_URL = 'localhost:58829/api/menu/completo'
    API_URL = `${environment.apiCommonUrl}${CONSTANTS.URI_MENU_COMPLETO}`
    menu = null
    constructor(private http:Http) {  }

    //Método que retorna el Menu Completo del Site Inversiones Security
    getMenu(): Observable<string>{

        return new Observable<string>(
            observer => {
                this.http.get(this.API_URL, this.requestOptions()).subscribe(
                (response) => {
                  // console.log(environment.apiUrl + CONSTANTS.CONTRIBUTIOSNWITHDRAW);
                  observer.next(response.json());
                //   observer.next(JSON.stringify(response.json()));
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

    //Método de test contra un ENDPOINT de internet para verificar que el get() funciona
    getMenuTest(): Observable<string> {
        return new Observable<string>(
          observer => {
            //https://mindicador.cl/#consumir-json
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

      //Método que arma los headers a ser enviados en el get() que son obligatorios para el microservicio
      private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
          options = new RequestOptions();
        }
        if (options.headers == null) {
          options.headers = new Headers();
        }
        //NOTA IMPORTANTE: Se comento la línea "<remove name="OPTIONSVerbHandler" />" en el archivo web.config de la ApiCommon para poder enviar los headers con éxito, adicionalmente se adiciono el headers "Invsec-Channel" en la línea  "<add name="Access-Control-Allow-Headers" value="Content-Type, Invsec-Channel" " para poder recibir dicho headers en la Api publicada en el servidor />
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
}