import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio2',
  templateUrl: './negocio2.component.html',
  styleUrls: ['./negocio2.component.css']
})
export class Negocio2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 //informacion sitio de interes
 images = ['../../assets/Agua/a1.jpg',
 '../../assets/Agua/a2.jpg',
 '../../assets/Agua/a3.jpg',
            ];
  
  titulosImagenes = [
    'Lugar por el exterior',
    'Lugar por el interior',
    'Pasos de filtración ',
  ];

 titulo_interes:string='Agua Sanita';
 subtitulos=['Horarios de atención',
            'Información sobre el negocio'];
  horarios=['Lunes a viernes en el horario de 9am a 7pm','Sábado y domingo de 9am a 5pm'];
 informacionSitio=[
'Local de expendio de agua tratada y filtrada, para el consumo directo de personas, buena atención, además tratamiento de desinfección de envases para trasporte del agua tratada. ',
'Los clientes suelen llegar en su auto con sus envases vacíos de agua, posteriormente este local ofrece desinfectar el envase y poner un agua sanita, es decir, un agua limpia que tiene 7 pasos de filtración. ',
'Los siete pasos de filtración son: osmosis inversa, carbón activo, suavizador, pulidor, filtro de sedimentos, lampara ultravioleta, inyección de ozono. ',
];
}
