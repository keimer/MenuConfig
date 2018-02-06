import { Component, OnInit, OnDestroy} from "@angular/core";
// import { Router, ActivatedRoute } from '@angular/router';
// import { Observable } from "rxjs/Observable";
// import { CONSTANTS } from "../../_models/constants";
// import { HttpService } from "../../_services/http.service";
// import { RequestOptions, ConnectionBackend, Http } from "@angular/http";
// import {Jsonp, Response, ResponseContentType} from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    //providers: [ErrorHandler]
  })
  
  
  export class HeaderComponent implements OnInit, OnDestroy {
    
    title = 'MenuConfi - Mantenedor del Menu';
    // getFullUrl(arg0: any): any {
    //     throw new Error("Method not implemented.");
    // }
      
      constructor(
        //   private http: HttpService,
        // private router: Router,
        // private erroHandler: ErrorHandler,
        // private cdr: ChangeDetectorRef,
        // private activatedRoute: ActivatedRoute
    ){}
        // private location: Location) {
        // // super(router);
        // ) {
        
      

      public ngOnInit(){

      }

      public ngOnDestroy(){

      }

      
    // public getMenuCompleto(): Observable<string> {
    //     return new Observable<string>(
    //       observer => {
    //           this.http.getNoSs(CONSTANTS.URI_MENU_COMPLETO).subscribe(
    //             ( response: Response) => {
    //              console.log('response getMenuCompleto: ', response);
    //               let data = response.json();
    //               observer.next(JSON.stringify(data));
    //             },
    //             (error: any) => {
    //             //   observer.error(this.http.handlerError(error));
    //             console.log('Hubo error');
    //             }
    //           );
    //       }
    //     );
    //   }


  }