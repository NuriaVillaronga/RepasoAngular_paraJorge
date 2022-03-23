import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlazado-eventos',
  templateUrl: './enlazado-eventos.component.html',
  styleUrls: ['./enlazado-eventos.component.css']
})
export class EnlazadoEventosComponent implements OnInit {

  operando1 : number;
  operando2 : number;
  
  constructor() {}

  ngOnInit(): void {}

  sumar(x: number, y: number):void {
    console.log("Enlazado de eventos");
    console.log(x+y);
  }

}
