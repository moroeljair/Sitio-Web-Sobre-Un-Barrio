import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio3',
  templateUrl: './negocio3.component.html',
  styleUrls: ['./negocio3.component.css']
})
export class Negocio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //informacion sitio de interes
 images = ['../../assets/Farmacia/f1.jpg','../../assets/Farmacia/f2.jpg','../../assets/Farmacia/f3.jpg',
            ];
  
  titulosImagenes = [
    'Lugar por el exterior',
    'Lugar por el interior',
    'Lugar por el interior',
  ];

 titulo_interes:string='Farmacias económicas';
 subtitulos=['Horarios de atención',
            'Información sobre el negocio'];
  horarios=['Lunes a viernes de: 8h00 a 21h00','Sábado y domingo de: 8h00 a 20h00'];
 informacionSitio=[
'Farmacias económicas se encuentran en 21 provincias del Ecuador, con una trayectoria de 14 años y con 521 farmacias a nivel nacional.  ',
'Una de estas farmacias a nivel nacional se encuentra en este barrio. ',   
'Es una farmacia practica y amigable, en la que el cliente puede encontrar ahorro y servicio personalizado.',
'La farmacia ofrece cantidad de medicamentos, además ofrece recargas para claro, movistar, DirecTV, en este lugar también se puede pagar servicios de agua potable y luz. ',
];

}
