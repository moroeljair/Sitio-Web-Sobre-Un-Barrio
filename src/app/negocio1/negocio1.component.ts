import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio1',
  templateUrl: './negocio1.component.html',
  styleUrls: ['./negocio1.component.css']
})
export class Negocio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 //informacion sitio de interes
 images = ['../../assets/Pollos/p1.jpg',
           '../../assets/Pollos/p2.jpg',
           '../../assets/Pollos/p3.jpg',
            ];
  
  titulosImagenes = [
    'Lugar por el exterior',
    'Lugar por el interior',
    'Lugar por el interior',
  ];

 titulo_interes:string='Pollos a la brasa Del Valle';
 subtitulos=['Horarios de atención',
            'Información sobre el negocio'];
  horarios=['Lunes a viernes de: 8h00 a 20h00','Sábado y domingo de: 9h00 a 21h00'];
 informacionSitio=[
'El restaurante ofrece un exquisito pollo al carbón.',
'Se ofrecen diferentes opciones en su menú: pollo para la mesa, medio pollo para llevar, medio para la mesa, combos personales con bebida, salchipapa, papi pollo, entre distintos combos por temporada.    ',   
];

}
