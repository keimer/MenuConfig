import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MenuConfi - Mantenedor del Menu';

  menuTest = [
    {"option": "Productos", "Nivel":1, "active":true,"path":"/productos"},
    {"option": "Fondos Mutuos", "Nivel":2, "active":true,"path":"/ffmm/misFondos"},
    {"option": "Cartolas", "Nivel":1, "active":true,"path":"/cartolas"},
    {"option": "Información y Documentos", "Nivel":1, "active":false,"path":"/informacionYdocumentos"},

  ]
  menu = [{
    "Nivel0": [
      {
        "option": "Productos",
        "Nivel1": [
          {
            "title": "Productos",
            "Nivel2": [
              {
                "option": "Fondos Mutuos",
                "route": "/ffmm/misFondos",
                "Nivel3": {
                  "title": "Fondos Mutuos",
                  "Nivel4": [
                    {
                      "action": "Mis Fondos",
                      "route": "/ffmm/misFondos",
                      "idMessage": "ffmm"
                    },
                    {
                      "action": "Mis Movimientos",
                      "route": "/ffmm/misMovimientos",
                      "idMessage": "ffmm"
                    },
                    {
                      "action": "Invertir",
                      "route": "/ffmm/invertir",
                      "idMessage": "ffmmInvertir"
                    },
                    {
                      "action": "Rescatar",
                      "route": "/ffmm/rescatar",
                      "idMessage": "ffmmRescatar"
                    },
                    {
                      "action": "Consulta Valores Cuota",
                      "route": "/ffmm/valoresCuota",
                      "idMessage": "ffmm"
                    }
                  ]
                }
              },
              {
                "option": "Fondos de Inversión",
                "route": "/fondosInversion/saldoFondosInversion",
                "Nivel3": {
                  "title": "Fondos de Inversión",
                  "Nivel4": [
                    {
                      "action": "Mi Saldo",
                      "route": "/fondosInversion/saldoFondosInversion",
                      "idMessage": "fondosInversion"
                    },
                    {
                      "action": "Mis Movimientos",
                      "route": "/fondosInversion/movimientosFondosInversion",
                      "idMessage": "fondosInversion"
                    }
                  ]
                }
              },
              {
                "option": "Acciones",
                "route": "/acciones/misAcciones",
                "Nivel3": {
                  "title": "Acciones",
                  "Nivel4": [
                    {
                      "action": "Acciones",
                      "Nivel5": [
                        {
                          "subaction": "Mis Acciones",
                          "route": "/acciones/misAcciones",
                          "idMessage": "acciones"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/acciones/misMovimientos",
                          "idMessage": "acciones"
                        },
                        {
                          "subaction": "Comprar",
                          "route": "/acciones/comprar",
                          "idMessage": "accionesComprar"
                        },
                        {
                          "subaction": "Vender",
                          "route": "/acciones/vender",
                          "idMessage": "accionesVender"
                        }
                      ]
                    },
                    {
                      "action": "Simultáneas",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/simultaneas/miSaldo",
                          "idMessage": "simultaneas"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/simultaneas/misMovimientos",
                          "idMessage": "simultaneas"
                        }
                      ]
                    },
                    {
                      "action": "Venta Corta",
                      "Nivel5": [
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/ventaCorta/misMovimientos",
                          "idMessage": "ventaCorta"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "option": "Administración de Cartera",
                "route": "/administracionCarteras/balanceInversiones",
                "Nivel3": {
                  "title": "Administración de Cartera",
                  "Nivel4": [
                    {
                      "action": "Balance de Inversión",
                      "route": "/administracionCarteras/balanceInversiones",
                      "idMessage": "administracionCarteras"
                    },
                    {
                      "action": "Consulta Aportes y Retiros",
                      "route": "/administracionCarteras/aportesyRetiros",
                      "idMessage": "administracionCarteras"
                    },
                    {
                      "action": "Informe de Fondo Mutuo",
                      "route": "/administracionCarteras/cartolaSaldoIFM",
                      "idMessage": "administracionCarteras"
                    },
                    {
                      "action": "Movimiento de Fondo Mutuo",
                      "route": "/administracionCarteras/cartolaMovimientoIFM",
                      "idMessage": "administracionCarteras"
                    }
                  ]
                }
              },
              {
                "option": "Instrumentos de Deuda",
                "route": "/id/saldoRentaFija",
                "Nivel3": {
                  "title": "Instrumentos de Deuda",
                  "Nivel4": [
                    {
                      "action": "Renta Fija",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/id/saldoRentaFija",
                          "idMessage": "id"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/id/movimientosRentaFija",
                          "idMessage": "id"
                        }
                      ]
                    },
                    {
                      "action": "Pactos",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/id/saldoPactos",
                          "idMessage": "pactos"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/id/movimientosPactos",
                          "idMessage": "pactos"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "option": "Portafolios Activos/Dinámicos",
                "title": "Portafolios Activos/Dinámicos",
                "route": "/pad/PaUltimasSolicitudes",
                "Nivel3": {
                  "title": "Portafolios Activos/Dinámicos",
                  "Nivel4": [
                    {
                      "action": "Plataforma Abierta de Fondos Mutuos",
                      "route": "/pad/paffmmSaldo",
                      "idMessage": "plataformaAbierta",
                      "Nivel5": [
                        {
                          "subaction": "Últimas Solicitudes",
                          "route": "/pad/PaUltimasSolicitudes",
                          "idMessage": "UltimasSolicitudes"
                        },
                        {
                          "subaction": "Valores Cuota",
                          "route": "/pad/valoresCuota",
                          "idMessage": "Movimientos"
                        },
                        {
                          "subaction": "Mi Saldo",
                          "route": "/pad/paffmmSaldo",
                          "idMessage": "Saldo"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/pad/paffmmMmovimientos",
                          "idMessage": "Movimientos"
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "option": "Ahorro Previsional Voluntario",
                "title": "Ahorro Previsional Voluntario",
                "route": "/apv/apvFFMMsaldo",
                "Nivel3": {
                  "title": "Ahorro Previsional Voluntario",
                  "Nivel4": [
                    {
                      "action": "APV Fondo Mutuo",
                      "route": "/apv/apvFFMMsaldo",
                      "idMessage": "apvFondoMutuo",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/apv/apvFFMMsaldo",
                          "idMessage": "Saldo"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/apv/apvFFMMmovimientos",
                          "idMessage": "Movimientos"
                        }
                      ]
                    },
                    {
                      "action": "APV Flexible",
                      "route": "/apv/saldoApvFlex",
                      "idMessage": "ApvFlex",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/apv/saldoApvFlex",
                          "idMessage": "Saldo"
                        }
                      ]
                    },
                    {
                      "action": "APV ULLA",
                      "route": "/apv/movimientosApvUlla",
                      "idMessage": "apvUlla",
                      "Nivel5": [
                        {
                          "subaction": "Mi Saldo",
                          "route": "/apv/saldoApvUlla",
                          "idMessage": "Saldo"
                        },
                        {
                          "subaction": "Mis Movimientos",
                          "route": "/apv/movimientosApvUlla",
                          "idMessage": "Saldo"
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "option": "Cartolas",
        "Nivel1": [
          {
            "Dato1": "datos1",
            "Dato2": "datos2"
          },
          {
            "title": "Cartolas",
            "Nivel2": [
              {
                "option": "Cartola Consolidada",
                "route": "/cartolas/consolidada",
                "Nivel3": {
                  "title": "Cartolas",
                  "Nivel4": [
                    {
                      "subaction": "Cartola Consolidada",
                      "action": "Cartola Consolidada",
                      "option": "Cartola Consolidada",
                      "route": "/cartolas/consolidada",
                      "idMessage": "cartolas"
                    },
                    {
                      "subaction": "Cartola Gestión Patrimonial",
                      "action": "Cartola Gestión Patrimonial",
                      "option": "Cartola Gestión Patrimonial",
                      "route": "/cartolas/balanceInversion",
                      "idMessage": "cartolas"
                    },
                    {
                      "subaction": "Cartola Corredora de Bolsa",
                      "action": "Cartola Corredora de Bolsa",
                      "option": "Cartola Corredora de Bolsa",
                      "route": "/cartolas/corredoresBolsa",
                      "idMessage": "cartolas"
                    },
                    {
                      "subaction": "Cartola de Fondos y APV",
                      "action": "Cartola de Fondos y APV",
                      "option": "Cartola de Fondos y APV",
                      "route": "/cartolas/fondos",
                      "idMessage": "cartolas"
                    },
                    {
                      "subaction": "Cartola APV Flexible",
                      "action": "Cartola APV Flexible",
                      "option": "Cartola APV Flexible",
                      "route": "/cartolas/apvFlexible",
                      "idMessage": "cartolas"
                    },
                    {
                      "subaction": "Cartola APV por Tipo de Ahorro",
                      "action": "Cartola APV por Tipo de Ahorro",
                      "option": "Cartola APV por Tipo de Ahorro",
                      "route": "/cartolas/apvTipoAhorro",
                      "idMessage": "cartolas"
                    }
                  ]
                }
              },
              {
                "option": "Cartola Consolidada",
                "route": "/cartolas/consolidada"
              },
              {
                "option": "Cartola Gestión Patrimonial",
                "route": "/cartolas/balanceInversion"
              },
              {
                "option": "Cartola Corredora de Bolsa",
                "route": "/cartolas/corredoresBolsa"
              },
              {
                "option": "Cartola de Fondos y APV",
                "route": "/cartolas/fondos"
              },
              {
                "option": "Cartola APV Flexible",
                "route": "/cartolas/apvFlexible"
              },
              {
                "option": "Cartola APV por Tipo de Ahorro",
                "route": "/cartolas/apvTipoAhorro"
              }
            ]
          }
        ]
      },
      {
        "option": "Información y Documentos",
        "Nivel1": [
          {
            "title": "Información y Documentos",
            "Nivel2": [
              {
                "option": "Certificados Tributarios",
                "route": "/infoDocs/certificadosTributarios",
                "idMessage": "infoDocs",
                "Nivel3": {
                  "title": "Información y Documentos",
                  "Nivel4": [
                    {
                      "subaction": "Certificados Tributarios",
                      "action": "Certificados Tributarios",
                      "route": "/infoDocs/certificadosTributarios",
                      "idMessage": "infoDocs"
                    },
                    {
                      "subaction": "Informe de Ejecución de Órdenes",
                      "action": "Informe de Ejecución de Órdenes",
                      "route": "/infoDocs/informeEjecucionOrdenes",
                      "idMessage": "infoDocs"
                    },
                    {
                      "subaction": "Aporte Canales Remotos",
                      "action": "Aporte Canales Remotos",
                      "route": "/infoDocs/aporteCanalesRemotos",
                      "idMessage": "infoDocs"
                    },
                    {
                      "subaction": "Registro Partícipes",
                      "action": "Registro Partícipes",
                      "route": "/infoDocs/registroParticipes",
                      "idMessage": "infoDocs"
                    },
                    {
                      "subaction": "Libro de Dividendos",
                      "action": "Libro de Dividendos",
                      "route": "/infoDocs/libros",
                      "idMessage": "infoDocs"
                    },
                    {
                      "subaction": "Facturas Emitidas",
                      "action": "Facturas Emitidas",
                      "route": "/infoDocs/facturas",
                      "idMessage": "infoDocs"
                    }
                  ]
                }
              },
              {
                "option": "Informe de Ejecución de Órdenes",
                "route": "/infoDocs/informeEjecucionOrdenes",
                "idMessage": "infoDocs"
              },
              {
                "option": "Aportes Canales Remotos",
                "route": "/infoDocs/aporteCanalesRemotos",
                "idMessage": "infoDocs"
              },
              {
                "option": "Registro Partícipes",
                "route": "/infoDocs/registroParticipes",
                "idMessage": "infoDocs"
              },
              {
                "option": "Libro de Dividendos",
                "route": "/infoDocs/libros",
                "idMessage": "infoDocs"
              },
              {
                "option": "Facturas Emitidas",
                "route": "/infoDocs/facturas",
                "idMessage": "infoDocs"
              }
            ]
          }
        ]
      },
      {
        "NewJSON": "dato insertado en el JSON"
      }
    ]
  }]



}
