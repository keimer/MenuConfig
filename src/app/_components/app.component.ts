import { Component } from '@angular/core';
import { menuCompletoService } from '../_services/menuCompleto.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //menuTest = null
  // menuJSON = null

  constructor(){//private menuCompletoService: menuCompletoService){
    //this.menuTest = menuCompletoService.getMenuCompleto()
    // this.menuJSON = menuCompletoService.getMenuCompletoJSON()
  }

  // menuTest = [
  //   {"option": "Productos", "Nivel":1, "active":true,"path":"/productos"},
  //   {"option": "Fondos Mutuos", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
  //   {"option": "Cartolas", "Nivel":1, "active":true,"path":"/cartolas"},
  //   {"option": "Información y Documentos", "Nivel":1, "active":true,"path":"/informacionYdocumentos"},

  // ]
  
  
}
