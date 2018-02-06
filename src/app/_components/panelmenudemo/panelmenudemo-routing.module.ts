import { Routes, RouterModule } from '@angular/router';

import { PanelMenuDemoComponent } from './panelmenudemo/panelmenudemo.component';
// import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: PanelMenuDemoComponent }, //, canActivate: [AuthGuard] },
    { path: 'panelmenu', component: PanelMenuDemoComponent }, //, canActivate: [AuthGuard] },
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
//   })
//   export class PanelMenuDemoRoutingModule {};
export const PanelMenuDemoRoutingModule = RouterModule.forChild(routes);