import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-switch',
  templateUrl: './directiva-switch.component.html',
  styleUrls: ['./directiva-switch.component.css']
})
export class DirectivaSwitchComponent implements OnInit {

  premio : number; 
  listaPremios : string[]; 

  constructor() { 
    this.premio = 0;
    this.listaPremios = ["VIAXE","ORDENADOR","MÓVIL","BICICLETA","SUDADEIRA","VALE DESCONTO"];  
  }

  ngOnInit(): void {
  }

}
