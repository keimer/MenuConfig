import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from '../_components/app.component';
import { menuCompletoService } from '../_services/menuCompleto.Service';
import { HeaderComponent } from '../_components/header/header.coomponent';
import { HttpService } from '../_services/http.service';
import { CONSTANTS } from '../_models/constants';
import { XHRBackend, RequestOptions, HttpModule, Http } from '@angular/http';

export function httpServiceFactory(
  xhrBackend: XHRBackend,
  requestOptions: RequestOptions
): Http {
  return new HttpService(xhrBackend, requestOptions);  
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    menuCompletoService,
    // HttpService,
    CONSTANTS,
    {
      provide: HttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
