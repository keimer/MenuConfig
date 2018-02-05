import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CONSTANTS } from "../_models/constants";
import { HttpService } from './http.service';

@Injectable()
export class menuCompletoService{
  // constructor(private http: HttpService) {
  constructor() {
  }
    menuTest = [
        {"option": "Productos-", "Nivel":1, "active":true,"path":"/productos"},
        {"option": "Fondos Mutuos-", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
        {"option": "Cartolas-", "Nivel":1, "active":true,"path":"/cartolas"},
        {"option": "Información y Documentos-", "Nivel":1, "active":false,"path":"/informacionYdocumentos"},
    
      ]
    public getMenuCompleto(){
       return this.menuTest 
    }

    // public getMenuCompletoJSON() : Observable<any> {
    //         return new Observable<string>(
    //             observer => {
    //                 console.log('MenuJsonService: ')
    //                 this.http.get(CONSTANTS.URI_MENU_COMPLETO()).subscribe(
    //                   (response) => observer.next(response.json()),
    //                   (error) => console.log('Error MenuJsonService')
    //                   //observer.error(this.http.handlerError(error))
    //                 );
    //               }
    //             );
    //  }
}