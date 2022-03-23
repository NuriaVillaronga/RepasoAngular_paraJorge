import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms'; //Importaciones para hacer uso del formulario reactivo


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})

export class FormularioReactivoComponent implements OnInit {

  formularioRexistro: FormGroup;

  constructor(camposFormulario: FormBuilder) { 

      const data = new Date().toISOString().substring(0,10);
      const nome = "Nuria Villaronga";

      this.formularioRexistro = camposFormulario.group(
        {
          dataRexistro : data,
          nome : [nome.toLowerCase(), Validators.required],
          email : ['nuria.villaronga@gmail.com', [Validators.email, Validators.required]],
          contrasinal : ['',[Validators.required, Validators.minLength(8)]],
          confirmarContrasinal : ['',[Validators.required]]
        },
        { 
          validators: [ValidacionContrasinal.match('contrasinal','confirmarContrasinal')]
        }
      );
  }

  ngOnInit(): void {
  }

  public rexistrar() {
      const datosFormulario = this.formularioRexistro.value;
      console.log(datosFormulario);
  }

  public obterMensaxeErro(nomeCampoFormulario: string): string {

      let erro = '';
      const nomeCampo = this.formularioRexistro.get(nomeCampoFormulario); 

      if (nomeCampo!.touched && nomeCampo!.errors != null) {
          erro = JSON.stringify(nomeCampo!.errors);
      }

      if (erro.includes('{"required":true}')) {
        return 'Este campo é requirido.';
      }
      if (erro.includes('{"email":true}')) {
        return 'Formato de email non válido';
      }
      if (erro.includes('requiredLength')) {
        return 'O contrasinal ten que ter coma mínimo 8 caracteres';
      }
      if (erro.includes('requiredPattern')) {
        return 'O contrasinal ten que comezar por un número e só pode incluír letras, números, punto, guión, guión baixo e dólar';
      }
      if (erro.includes('{"matching":false}')) {
        return 'Os contrasinais non coinciden';
      }

      return erro;
  }

}

export default class ValidacionContrasinal {

    static match(password: string, confirmedPassword: string): ValidatorFn {   

        return (camposFormulario: AbstractControl) => { 

            const contrasinal = camposFormulario.get(password);
            const confirmarContrasinal = camposFormulario.get(confirmedPassword);  

            if (confirmarContrasinal!.errors && !confirmarContrasinal!.errors['matching']) {
                return null;
            }
            if (contrasinal!.value !== confirmarContrasinal!.value) {
                camposFormulario!.get(confirmedPassword)!.setErrors({ matching: false });
                return { matching: false };
            } 
            else {
                return null;
            }
        };

    }

}
