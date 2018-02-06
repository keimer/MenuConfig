import { Component } from "@angular/core";


@Component({
    selector: 'app-panelmenudemo',
    templateUrl: './panelmenudemo.component.html',
    styleUrls: ['./panelmenudemo.component.css']
})
export class PanelMenuDemoComponent {
    menuTest = [
        {"option": "Productos", "Nivel":1, "active":true,"path":"/productos"},
        {"option": "Fondos Mutuos", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
        {"option": "Cartolas", "Nivel":1, "active":true,"path":"/cartolas"},
        {"option": "Información y Documentos", "Nivel":1, "active":true,"path":"/informacionYdocumentos"},
      ]
}