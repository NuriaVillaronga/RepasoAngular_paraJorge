import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-if',
  templateUrl: './directiva-if.component.html',
  styleUrls: ['./directiva-if.component.css']
})
export class DirectivaIfComponent implements OnInit {

  div_oculto: boolean;
  texto_oculto: boolean;

  constructor() { 
    this.div_oculto = false; //Al inicio se mostrará el div oculto
    this.texto_oculto = true; //Al inicio se mostrará el texto visible
  }

  ngOnInit(): void {
  }

}
