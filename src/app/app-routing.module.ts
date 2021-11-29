import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { Negocio1Component } from './negocio1/negocio1.component';
import { Negocio2Component } from './negocio2/negocio2.component';
import { Negocio3Component } from './negocio3/negocio3.component';
import { Negocio4Component } from './negocio4/negocio4.component';
import { Negocio5Component } from './negocio5/negocio5.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
   //lo que quiere decir
  //si se pone /informacion, se dirige al componente informacion 
  //{path:'informacion',component:InformacionComponent},
  {path:'',component:InicioComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'negocio1',component:Negocio1Component},
  {path:'negocio2',component:Negocio2Component},
  {path:'negocio3',component:Negocio3Component},
  {path:'negocio4',component:Negocio4Component},
  {path:'negocio5',component:Negocio5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
