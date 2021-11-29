import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocio4',
  templateUrl: './negocio4.component.html',
  styleUrls: ['./negocio4.component.css']
})
export class Negocio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   //informacion sitio de interes
 images = ['../../assets/Panaderia/b1.jpg','../../assets/Panaderia/b2.jpg','../../assets/Panaderia/b3.jpg',
];

titulosImagenes = [
'Lugar por el exterior',
'Lugar por el interior',
'Lugar por el interior',
];

titulo_interes:string='Panadería y pastelería Bakerey';
subtitulos=['Horarios de atención',
'Información sobre el negocio'];
horarios=['Lunes a viernes de: 6h00 a 21h15','Sábado y domingo de: 7h00 a 20h00'];
informacionSitio=[
'En esta panadería se ofrece distinto tipo de pan y a diferentes precios.',
'Se ofrece bocadillos, tales como, pastas de piña, empanadas de pollo, orejitas, bizcochos, pasteles, entre otros dulces y pastas.',
'Ofrece bebidas y galletas producidas por empresas, tales como, galletas amor, galletas oreo, galletas Ritz, entre otras galletas, y todo tipo de bebidas, tales como, Cifrut, Vive 100, Coca Cola, Pepsi, agua Tesalia, entre otras bebidas. ',
];

}
