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
    
    menuTest:any = null
    // [
    //     {"option": "Productos", "Nivel":1, "active":true,"path":"/productos"},
    //     {"option": "Fondos Mutuos", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
    //     {"option": "Cartolas", "Nivel":1, "active":true,"path":"/cartolas"},
    //     {"option": "Información y Documentos", "Nivel":1, "active":true,"path":"/informacionYdocumentos"},
    //   ]
    saldos: any = []

    constructor(
        // private MenuCompletoService : menuCompletoService, 
        private httpMenuService : HttpMenuService){

    }
    
    public ngOnInit(){
        /**
        * Metodo para conusltar el menu del cliente
        */
        // this.menuTest = this.MenuCompletoService.menuTest_Service
        // let obj = this.httpMenuService.getMenu()
        // console.log(obj)
        // this.menuTest = Object.entries(obj).map(e => Object.assign(e, { 0: +e[0] }))
        // console.log(this.menuTest)
        this.getFixedRentReport()
        //debugger
        // this.MenuCompletoService.getMenuCompleto().subscribe(
        //     (response: string) => {
        //         this.menu = JSON.parse(response);
                // const $scope = this;
    
                // setTimeout(function () {
                // $scope.activeMenu();
                // }, 1000);
        //     },
        //     (error: any) => {
        //         console.log('Error 1')
        //         //this.handleError(error);
        //     }
        // );
    } // Fin ngOnInit()

    getFixedRentReport() {
     
        this.httpMenuService.getMenu().subscribe(
          (response: any) => {
             this.saldos = response;
             console.log(response)
          },
          (error: any) => {
            // this.handleError(error);
            console.log('Error')
          }
        );
      }
    /**
   * Metodo para conusltar el menu del cliente
   */
//   callMenu() {
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