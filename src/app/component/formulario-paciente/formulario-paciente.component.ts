import { Component } from '@angular/core';
import {Analitica} from '../../models/analitica';
import {Paciente} from '../../models/paciente';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AnaliticaService} from '../../services/analitica-service';

@Component({
  selector: 'app-formulario-paciente',
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './formulario-paciente.component.html',
  styleUrl: './formulario-paciente.component.css'
})
export class FormularioPacienteComponent {
  paciente: Paciente = {
    ...{} as Paciente,
  }

//Inyeccion del service
  constructor(private analiticaService: AnaliticaService) {}

  public submit():void{
    this.analiticaService.insertarPaciente(this.paciente).subscribe(()=>{
      console.log("Paciente añadido")
    })
  }

}
