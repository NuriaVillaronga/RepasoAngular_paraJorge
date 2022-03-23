import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filla-component',
  templateUrl: './filla-component.component.html',
  styleUrls: ['./filla-component.component.css']
})
export class FillaComponentComponent implements OnInit {

  @Input() productoNaiFilla: string;
  @Output() mensaxeFillaNai = new EventEmitter<string>();

  producto : Produto;

  constructor() {}

  ngOnInit(): void { 
    this.producto = JSON.parse(this.productoNaiFilla);
  }

  //Mandase a nai o producto que recibimos dela pero en modo string
  enviarMensaxeParaNai() {
    this.mensaxeFillaNai.emit(JSON.stringify(this.producto)); 
  }

}

export interface Produto {
  nome: string;
  prezo: number
}
