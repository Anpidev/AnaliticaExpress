import { Component } from '@angular/core';
import {AnaliticaService} from '../../services/analitica-service';
import {Paciente} from '../../models/paciente';
import {NgForOf, NgIf} from '@angular/common';
import {Medico} from '../../models/medico';
import {AuthService} from '../../services/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista-paciente',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.css'
})
export class ListaPacienteComponent {

  pacientes: Paciente[]=[];

  constructor(public analiticaService:AnaliticaService, public authService:AuthService) {
    this.cargarPacientes();}

  cargarPacientes(){
    this.analiticaService.buscarPacientes().subscribe((datos)=>{
      this.pacientes=datos;
    })
  }


  borrar(paciente:Paciente){
    this.analiticaService.borrarPaciente(paciente).subscribe(()=>{
      console.log("Paciente eliminado");
      this.cargarPacientes();
    })
  }
}
