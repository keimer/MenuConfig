import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
// import { XHRBackend, RequestOptions, HttpModule, Http } from '@angular/http';

import { PanelMenuDemoRoutingModule } from './panelmenudemo-routing.module';
import { PanelMenuDemoComponent } from './panelmenudemo/panelmenudemo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PanelMenuDemoRoutingModule,
        
    ],
    declarations: [
        PanelMenuDemoComponent
    ]
    // ,providers: [
    // ]
    // ,schemas: [NO_ERRORS_SCHEMA]
})

export class PanelMenudModule { } 
