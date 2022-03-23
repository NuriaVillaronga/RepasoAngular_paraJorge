import { Component, OnInit } from '@angular/core';
import productosGal from '../../assets/productosGal.json';
import productosPor from '../../assets/productosPor.json';

@Component({
  selector: 'app-directiva-for',
  templateUrl: './directiva-for.component.html',
  styleUrls: ['./directiva-for.component.css']
})
export class DirectivaForComponent implements OnInit {

  lista: string[][];
  persoa: Persoa[][];
  idioma: string;
  productos : Producto[][];

  constructor() { 
    this.lista =  [
                    ["Nuria","Villaronga","24"],
                    ["Mario","Guillán","32"],
                    ["Dalila","Suárez","19"]
                  ];

    this.persoa = [
                    [{nome:"Nuria", idade:24, pais:"Portugal"}],
                    [{nome:"Mario", idade:32, pais:"España"}],
                    [{nome:"Milena", idade:6, pais:"España"}],
                    [{nome:"Moraima", idade:19, pais:"Portugal"}],
                    [{nome:"Dalila", idade:17, pais:"Francia"}],
                    [{nome:"Juana", idade:52, pais:"Francia"}],
                  ];
  }

  ngOnInit(): void {
    this.idioma == "gal";
    this.productos = [[productosGal[0]], [productosGal[1]], [productosGal[2]]];
  }

  cambiarIdioma(idioma : string) {
      this.idioma = idioma;

      if(this.idioma == "gal") {
          this.productos = [[productosGal[0]], [productosGal[1]], [productosGal[2]]];
      }
      if(this.idioma == "por") {
          this.productos = [[productosPor[0]], [productosPor[1]], [productosPor[2]]];
      }
  }

}

export interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

export interface Persoa {
  nome: string;
  idade: number;
  pais: string;
}
