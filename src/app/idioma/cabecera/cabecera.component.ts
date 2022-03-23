import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import productosGal from '../../../assets/productosGal.json';
import productosPor from '../../../assets/productosPor.json';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  idioma : string;
  productos : Producto[][]

  constructor() {}

  ngOnInit(): void {
      this.idioma = "gal";
      this.productos = [[productosGal[1]], [productosGal[2]]];
  }

  cambiarIdioma(idioma : string) {

      this.idioma = idioma;

      if(this.idioma == "gal") {
          this.productos = [[productosGal[1]], [productosGal[2]]];
      }
      if(this.idioma == "por") {
          this.productos = [[productosPor[1]], [productosPor[2]]];
      }
  }
}

export interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}
