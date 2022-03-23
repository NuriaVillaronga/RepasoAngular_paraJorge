import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nai-component',
  templateUrl: './nai-component.component.html',
  styleUrls: ['./nai-component.component.css']
})
export class NaiComponentComponent implements OnInit {

  producto : string;
  mensaxeFillaNai : string; //Variable que recibiremos da compoñente filla

  constructor() {} 

  ngOnInit(): void {
      this.producto = '{"nome":"Anel Chrome Hearts", "prezo":1250}'; 
  }

  //Funcion que se empleará para recibir a producto_string da compoñente filla
  recibirMensaxeDeFilla(mensaxeFilla: string) {
    this.mensaxeFillaNai = mensaxeFilla; 
  }

}
