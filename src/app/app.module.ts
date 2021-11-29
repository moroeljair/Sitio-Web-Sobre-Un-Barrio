import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Negocio1Component } from './negocio1/negocio1.component';
import { Negocio2Component } from './negocio2/negocio2.component';
import { Negocio3Component } from './negocio3/negocio3.component';
import { Negocio4Component } from './negocio4/negocio4.component';
import { Negocio5Component } from './negocio5/negocio5.component';
import { FilterPipe } from './pipes/filter.pipe';
//para trabajar con ngModel
import { FormsModule } from '@angular/forms';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    NosotrosComponent,
    CatalogoComponent,
    Negocio1Component,
    Negocio2Component,
    Negocio3Component,
    Negocio4Component,
    Negocio5Component,
    FilterPipe,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
