import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlazado-bidireccional',
  templateUrl: './enlazado-bidireccional.component.html',
  styleUrls: ['./enlazado-bidireccional.component.css']
})
export class EnlazadoBidireccionalComponent implements OnInit {

  titulo : string;
  cor : string;
  idioma : string;

  constructor() {
      this.titulo = "Este título pode ser mudado de cor, contido e idioma";
      this.cor = "orange";
      this.idioma = "gal";
  }

  ngOnInit(): void {}

  cambiarIdioma(idioma : string) {
      this.idioma = idioma;

      if(this.idioma == "gal") {
          this.titulo = "Este título pode ser mudado de cor, contido e idioma";
      }
      if(this.idioma == "es") {
          this.titulo = "Este título puede ser cambiado de color, contenido e idioma";
      }
  }

  cambiarCor() { 
      if (this.cor == "orange") {
        this.cor = "red";
      }
      else {
        this.cor = "orange"
      }
  }

  obterCor() {
      return this.cor;
  }

}
