import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //parte del navegador de informacion
  active = 1;

  images = ['../../assets/administracion1.jpg',
            '../../assets/administracion2.jpg',
            '../../assets/administracion3.jpg',
            '../../assets/administracion4.jpg',
            '../../assets/administracion5.jpg',
            '../../assets/administracion6.jpg',
            ];


  //informacion sitio de interes
  titulo_interes:string='Administración Zonal Los Chillos';
  informacionSitio=[
    'En diciembre del 2011 fue inaugurada ante una fiesta popular, con la presencia del Dr. Augusto Barrera, exalcalde de Quito. El área de construcción dividida en tres plantas es de 3259m2. La construcción inicio en agosto del 2010, donde laboraron 14 meses, 211 obreros y 25 técnicos. ',
    'La construcción de este edificio tuvo como propósito crear un centro de servicios para atender y dar servicios a toda la comunidad del Valle de los Chillos, en condiciones óptimas y de calidad en un ambiente laboral adecuado para los funcionarios municipales en este importante sector del Distrito Metropolitano de Quito.',
    'La Hacienda San José, creada hace 130 años, ahora forma parte de la Administración Zonal, los mismos que se encargaron de su reconstrucción y ahora de su mantenimiento, este espacio es usado para distintas actividades culturales, tales como talleres de pintura, talleres de música, entre otros talleres, además cuenta con una amplia zona, donde se han contabilizado y catalogado 564 árboles, muchos de ellos cuentan con identificación por ser únicos en su especie, altura o grosor, y este espacio es utilizado como parque por la comunidad.',
  ];

  //informacion del barrio
  info_barrio=[
    'Se encuentra ubicado en la parroquia de Conocoto, la cual esta ubicada a 11km del centro de Quito, en el costado occidental del Valle de los Chillos, sobre la ladera oriental de la loma de Puengasí. Su territorio se extiende en 56 km2, su altimetría es variable entre los 2.390 y los 3.175 metros sobre el nivel del mar. ',
    'El barrio se encuentra delimitado al norte por la quebrada Conocoto y calle Montalvo, al sur por la calle Temístocles Terán Álvarez, al este por la calle Olmedo, calle Ilalo y calle García Moreno, y al oeste por la calle Abdón Calderón y quebrada Conocoto.',
    'Según moradores antiguos del barrio, se dice, que el barrio empezó a crecer entre los años del 2005, en este año se empezaron a construir mayor número de viviendas, posteriormente calles asfaltadas, en el 2011 la inauguración de la administración zonal del valle, en el 2019 la inauguración del parque 6 de junio, además de la repavimentación de la avenida Marqueza de Solanda. ',
  ];

  //informacion de la parroquia
  info_parroquia = [
    'El nombre de Conocoto deriva de la palabra quichua Cunugcutu, que en español significa loma abrigada. Hay versiones de que en este territorio hubo asentamientos del pueblo Cara y de la cultura Panzaleo.',
    'Se cree que el actual territorio de Conocoto se pobló desde hace más de 12.000 años, pero solo se tiene evidencia certera de asentamientos del pueblo Cara entre el 550 y 1140 d.C. En este mismo lugar se asentó Este la cultura Panzaleo, y finalmente, el territorio formaría parte del imperio Inca que culminó con la conquista española en el siglo XVI.',
    'La Fundación de Quito (6 de diciembre de 1534) marcó el comienzo de la fundación de otros pueblos pequeños que se encontraban cerca de Quito, un de ellos fue el pueblo de Conocoto. Aproximadamente en 1560 se empieza la construcción; se escoge la planicie asentada entre la quebrada de Pungu Huaicu y el camino a Píntag. Se construyen 5 calles longitudinales de Sur a Norte y 7 transversales de Este a Oeste, con límites en las actuales calles Juan Montalvo al Sur, Bolívar al Norte, Ascázubi al Oriente y la quebrada Pungu Huaicu al Occidente. El pueblo se estableció con una población inicial de aproximadamente 700 habitantes.',
  ];
}
