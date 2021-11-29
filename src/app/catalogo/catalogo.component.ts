import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //parte para gestionar filtro el pipe
  filterGaleria = '';

  //lista de negocios 3 primeros
  listaNegocios1 = [
    {
      "titulo":"Pollos a la brasa Del Valle",
      "descripcion":"Restaurante",
      "urlPagina":"/negocio1",
      "urlImg":"../../assets/Pollos/p1.jpg",
    },
    {
      "titulo":"Agua Sanita",
      "descripcion":"Planta purificadora",
      "urlPagina":"/negocio2",
      "urlImg":"../../assets/Agua/a1.jpg",
    },
    {
      "titulo":"Farmacias económicas",
      "descripcion":"Farmacia",
      "urlPagina":"/negocio3",
      "urlImg":"../../assets/Farmacia/f1.jpg",
    },
  ];

    //lista de negocios 4to y 5to
    listaNegocios2 = [
      {
        "titulo":"Bakerey",
        "descripcion":"Panadería y pastelería ",
        "urlPagina":"/negocio4",
        "urlImg":"../../assets/Panaderia/b1.jpg",
      },
      {
        "titulo":"Marisquería Señor Bollado",
        "descripcion":"Restaurante",
        "urlPagina":"/negocio5",
        "urlImg":"../../assets/Restaurante/e2.jpg",
      },
     
    ];
  
}
