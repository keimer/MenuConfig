import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CONSTANTS } from "../../_models/constants";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    // providers: [ErrorHandler]
  })
  
  
  export class FooterComponent implements OnInit, OnDestroy {
      public ngOnInit(){

      }

      public ngOnDestroy(){
          
      }
      
  }