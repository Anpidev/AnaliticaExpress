import { Component } from '@angular/core';
import {AnaliticaService} from '../../services/analitica-service';
import {Paciente} from '../../models/paciente';
import {NgForOf} from '@angular/common';
import {Medico} from '../../models/medico';

@Component({
  selector: 'app-lista-paciente',
  imports: [
    NgForOf
  ],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.css'
})
export class ListaPacienteComponent {

  pacientes: Paciente[]=[];

  constructor(public analiticaService:AnaliticaService) {
    this.analiticaService.buscarPacientes().subscribe((datos)=>{
      this.pacientes=datos;
    })
  }


  borrar(paciente:Paciente){
    this.analiticaService.borrarPaciente(paciente).subscribe(()=>{
      console.log("Paciente eliminado")
    })
  }
}
