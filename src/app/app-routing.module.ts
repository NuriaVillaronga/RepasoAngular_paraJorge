import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component'; //Se añade este enrutado para poder desplegar el formulario

const routes: Routes = [
    {
        path: 'desplegarFormulario',
        component: FormularioReactivoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
