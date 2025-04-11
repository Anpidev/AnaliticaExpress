import { Component } from '@angular/core';
import {Paciente} from '../../models/paciente';
import {AnaliticaService} from '../../services/analitica-service';
import {Medico} from '../../models/medico';
import {NgForOf} from '@angular/common';
import {Analitica} from '../../models/analitica';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-lista-medico',
    imports: [
        NgForOf,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './lista-medico.component.html',
  styleUrl: './lista-medico.component.css'
})
export class ListaMedicoComponent {

  medicos: Medico[]=[];

  constructor(public analiticaService:AnaliticaService) {
    this.cargarMedicos();
  }
  cargarMedicos(){
    this.analiticaService.buscarMedicos().subscribe((datos)=>{
      this.medicos=datos;
    })
  }

  borrar(medico:Medico){
    this.analiticaService.borrarMedico(medico).subscribe(()=>{
      console.log("Médico eliminado");
      this.cargarMedicos();
    })
  }
}
