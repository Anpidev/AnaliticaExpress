import { Component } from '@angular/core';
import {Analitica} from '../../models/analitica';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {EstadoAnalitica} from '../../models/estado-analitica';

@Component({
  selector: 'app-formulario-estado',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './formulario-estado.component.html',
  styleUrl: './formulario-estado.component.css'
})
export class FormularioEstadoComponent {
  analitica: Analitica = {
    ...{} as Analitica,
    estado: EstadoAnalitica.CREADA // Valor inicial por defecto
  };
  // Aceder al enum en el template
  estados = Object.values(EstadoAnalitica);

  public submit():void{
    console.log(this.analitica);
  }
}
