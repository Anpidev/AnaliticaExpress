import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Paciente} from '../../models/paciente';
import {Medico} from '../../models/medico';

@Component({
  selector: 'app-formulario-medico',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario-medico.component.html',
  styleUrl: './formulario-medico.component.css'
})
export class FormularioMedicoComponent {
  medico: Medico = {
    ...{} as Medico,
  }

  public submit():void{
    console.log(this.medico);
  }

}
