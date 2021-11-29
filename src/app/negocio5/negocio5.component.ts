import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio5',
  templateUrl: './negocio5.component.html',
  styleUrls: ['./negocio5.component.css']
})
export class Negocio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //informacion sitio de interes
    images = ['../../assets/Restaurante/e1.jpg','../../assets/Restaurante/e2.jpg','../../assets/Restaurante/e3.jpg',
  ];
  
  titulosImagenes = [
  'Letrero ',
  'Lugar por el interior',
  'Lugar por el interior',
  ];
  
  titulo_interes:string='Marisquería Señor Bollado ';
  subtitulos=['Horarios de atención',
  'Información sobre el negocio'];
  horarios=['Lunes a viernes de: 8h00 a 18h00','Sábado y domingo de: 8h00 a 19h00'];
  informacionSitio=[
 'Este restaurante es una marisquería que ofrece platos con mariscos, además ofrece platos con carnes. ',
 'Sus principales platos con mariscos son: encebollados, arroz marinero, camarones apanados, diferentes tipos de cebiches y sopa marinera. ',
 'Sus platos con carnes son: parrillada, menestra de pollo, menestra de chuleta y menestra de carne. ',
  ];

}
