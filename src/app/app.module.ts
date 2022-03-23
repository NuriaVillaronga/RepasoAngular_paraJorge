import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaIfComponent } from './directiva-if/directiva-if.component';
import { DirectivaForComponent } from './directiva-for/directiva-for.component';
import { DirectivaSwitchComponent } from './directiva-switch/directiva-switch.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { EnlazadoPropiedadesComponent } from './enlazado-propiedades/enlazado-propiedades.component';
import { EnlazadoEventosComponent } from './enlazado-eventos/enlazado-eventos.component';
import { EnlazadoBidireccionalComponent } from './enlazado-bidireccional/enlazado-bidireccional.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Importacion para el funcionamiento de los formularios (Añadir tb en imports[])
import { NaiComponentComponent } from './call_components/nai-component/nai-component.component';
import { FillaComponentComponent } from './call_components/filla-component/filla-component.component';
import { ProductosComponent } from './idioma/productos/productos.component';
import { CabeceraComponent } from './idioma/cabecera/cabecera.component'; 
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaIfComponent,
    DirectivaForComponent,
    DirectivaSwitchComponent,
    FormularioReactivoComponent,
    EnlazadoPropiedadesComponent,
    EnlazadoEventosComponent,
    EnlazadoBidireccionalComponent,
    NaiComponentComponent,
    FillaComponentComponent,
    ProductosComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
