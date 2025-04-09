import { Component } from '@angular/core';
import {AnaliticaService} from '../../services/analitica-service';
import {Paciente} from '../../models/paciente';
import {NgForOf} from '@angular/common';

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
}
