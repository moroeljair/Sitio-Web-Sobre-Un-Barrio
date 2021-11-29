import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = ['../../assets/Me/m1.jpg',
  '../../assets/Me/m2.jpg',
  '../../assets/Me/m3.jpg',
  '../../assets/Me/m4.jpg',
  '../../assets/Me/m5.jpg',
  '../../assets/Me/m6.jpg',
  ];

  image = ['../../assets/jair.JPG',
            ];

   //informacion sitio de interes
   titulo_interes:string='Jair Alexis Morocho Duran';
   informacionSitio=[
  'Estudiante de Ingeniería en Ciencias de la Computación de la Universidad Politécnica Salesiana.',
  'Semestre actual: Séptimo.',
  'Edad actual: 22 años.',
  'Lugar de nacimiento: Quito, Ecuador.',
  'Tecnologías que sabe usar: Java, Python, SQL, Angular, JavaScript, HTML, CSS',   
  'Hobbies: caminar, estirar, leer un libro. ',
  ];

  correo='jmorochod@est.ups.edu.ec';
}
