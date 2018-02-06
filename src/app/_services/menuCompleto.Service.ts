import {Jsonp, Response, ResponseContentType} from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CONSTANTS } from "../_models/constants";
import { HttpService } from './http.service';

@Injectable()
export class menuCompletoService{
  constructor(private http: HttpService) {
  // constructor() {
  }
    menuTest_Service = [
        {"option": "Productos-", "Nivel":1, "active":true,"path":"/productos"},
        {"option": "Fondos Mutuos-", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
        {"option": "Cartolas-", "Nivel":1, "active":true,"path":"/cartolas"},
        {"option": "Información y Documentos-", "Nivel":1, "active":false,"path":"/informacionYdocumentos"},
    
      ]
    getMenuCompleto(){
      console.log(this.menuTest_Service)
       return this.menuTest_Service 
    }

    /**
   * Funcion para consumir servicio DS1:/dashboard/menu
   * Retorna string en formato JSON con el menu habilitado para el cliente
   *
   * @returns Observable<JSON>
   */
  getMenu(): Observable<string> {
    return new Observable<string>(
      observer => {
        let menu = null
        
        this.http.get(CONSTANTS.URI_MENU_COMPLETO).subscribe(
          (response: Response) => {
            const data = response.json();
            if (response.ok) {
              if (data && typeof data.menu !== undefined && data.menu != null) {
                menu = data.menu;
                sessionStorage.setItem('menu', JSON.stringify(menu));
                observer.next(JSON.stringify(menu));
                // this.hasMenu.next(true);
              } else {
                // observer.error(this.http.handlerError(response));
                console.log("Hubo error en el servicio menuCompletoService al intentar recuperar el menu de BDD")
              }
            } else {
              // observer.error(this.http.handlerError(response));
              console.log("Hubo error en el servicio menuCompletoService al intentar recuperar el menu de BDD")
            }
          },
          (error: any) => {
            // observer.error(this.http.handlerError(error));
            console.log("Hubo error en el servicio menuCompletoService al intentar recuperar el menu de BDD")
          }
        );
        
      }
    );
  }

    // public getMenuCompletoJSON() : Observable<any> {
    //         return new Observable<string>(
    //             observer => {
    //                 console.log('MenuJsonService: ')
    //                 this.http.get(CONSTANTS.URI_MENU_COMPLETO().subscribe(
    //                   (response) => observer.next(response.json()),
    //                   (error) => console.log('Error MenuJsonService')
    //                   //observer.error(this.http.handlerError(error))
    //                 );
    //               }
    //             );
    //  }
}