import { Component } from "@angular/core";
import { menuCompletoService } from "../../../_services/menuCompleto.Service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { HttpMenuService } from "../../../_services/httpMenu.service";


@Component({
    selector: 'app-panelmenudemo',
    templateUrl: './panelmenudemo.component.html',
    styleUrls: ['./panelmenudemo.component.css']
})
export class PanelMenuDemoComponent implements OnInit{
    
    menuTest:any = []
    // [
    //     {"option": "Productos", "Nivel":1, "active":true,"path":"/productos"},
    //     {"option": "Fondos Mutuos", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
    //     {"option": "Cartolas", "Nivel":1, "active":true,"path":"/cartolas"},
    //     {"option": "Información y Documentos", "Nivel":1, "active":true,"path":"/informacionYdocumentos"},
    //   ]

    constructor(
        // private MenuCompletoService : menuCompletoService, 
        private httpMenuService : HttpMenuService){

    }
    
    public ngOnInit(){
        this.callMenu()
        //debugger
        
    } // Fin ngOnInit()

    /****** Metodo para conusltar el menu del cliente   ******/
    callMenu() {
     
        this.httpMenuService.getMenu().subscribe(
          (response: any) => {
            //  this.menuTest = response;
            // Modifico el tipo de objeto "Object" para Array con el fin de poder recorrerlo usando el *ngFor
             this.menuTest = Object.entries(response).map(e => Object.assign(e, { 0: +e[0] }))[0][1]
             console.log(response)
          },
          (error: any) => {
            // this.handleError(error);
            console.log('Error')
          }
        );
      }
    
//   callMenuOLD() {
//     this.MenuCompletoService.getMenu().subscribe(
//       (response: string) => {
//         console.log("response: ", response)
//         this.menuTest = JSON.parse(response);
//         // const $scope = this;

//         // setTimeout(function () {
//         //   $scope.activeMenu();
//         // }, 1000);
//       },
//       (error: any) => {
//         // this.handleError(error);
//         console.log("Error en panelmenudemoComponent - function callMenu")
//       }
//     );
//   }

} //Fin PanelMenuDemoComponent