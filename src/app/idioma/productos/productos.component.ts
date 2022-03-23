import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() productoNaiFilla: Producto[][];
  productos: Producto[][];

  constructor() {}

  ngOnInit(): void {
    this.productos = this.productoNaiFilla;
  }

}

export interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}
