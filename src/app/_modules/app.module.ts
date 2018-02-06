// ----------- MODULS -------------------
import { ROUTES } from './app-routing.module';

// ----------- COMPONENTS DE TERCEROS -------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { XHRBackend, RequestOptions, HttpModule, Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';

// ----------- COMPONENTS -------------------
import { AppComponent } from '../_components/app.component';
import { HeaderComponent } from '../_components/header/header.coomponent';
import { FooterComponent } from '../_components/footer/footer.component';

// ---------- MODELS ----------------
import { CONSTANTS } from '../_models/constants';

// ---------- SERVICES ----------------
import { HttpService } from '../_services/http.service';
import { menuCompletoService } from '../_services/menuCompleto.Service';
import { HttpMenuService } from '../_services/httpMenu.service';


// export function httpServiceFactory(
//   xhrBackend: XHRBackend,
//   requestOptions: RequestOptions
// ): Http {
//   return new HttpService(xhrBackend, requestOptions);  
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ROUTES
      // [
      //   {
      //     path: '',
      //     loadChildren: '../_components/panelmenudemo/panelmenudemo.module#PanelMenudModule'
      //   }
      // ],
      ,{
        // Router options
        useHash: false,
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabled'
      }
    ),
    HttpModule,
  ],
  providers: [
    menuCompletoService,
    HttpService,
    HttpMenuService,
    CONSTANTS
    // ,
    // {
    //   provide: HttpService,
    //   useFactory: httpServiceFactory,
    //   deps: [XHRBackend, RequestOptions]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
