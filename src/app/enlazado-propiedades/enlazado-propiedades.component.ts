import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlazado-propiedades',
  templateUrl: './enlazado-propiedades.component.html',
  styleUrls: ['./enlazado-propiedades.component.css']
})
export class EnlazadoPropiedadesComponent implements OnInit {

  persoa: Persoa; 

  constructor() {
    this.persoa = {nome:"Moraima", idade:29}
  }

  ngOnInit(): void {}

}

export interface Persoa {
  nome: string;
  idade: number;
}
