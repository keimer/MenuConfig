// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
    {
      path: '',
      loadChildren: '../_components/panelmenudemo/panelmenudemo.module#PanelMenudModule'
    }
  // {
  //     path: '',
  //     redirectTo: 'home',
  //     pathMatch: 'full'
  // },
//   ,{
//     path: 'ffmm',
//     loadChildren: '../_components/mutual-funds/mutual-fund.module#MutualFundsModule'
//   }
]
 




