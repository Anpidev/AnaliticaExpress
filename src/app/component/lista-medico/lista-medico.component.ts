import { Component } from '@angular/core';
import { AnaliticaService } from '../../services/analitica-service';
import { Medico } from '../../models/medico';
import { NgForOf, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista-medico',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './lista-medico.component.html',
  styleUrls: ['./lista-medico.component.css']
})
export class ListaMedicoComponent {

  medicos: Medico[] = [];

  constructor(public analiticaService: AnaliticaService, public authService: AuthService) {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this.analiticaService.buscarMedicos().subscribe((datos) => {
      this.medicos = datos;
    });
  }

  borrar(medico: Medico) {
    if (confirm(`¿Estás seguro de que deseas borrar al médico ${medico.nombre} ${medico.apellido}?`)) {
      this.analiticaService.borrarMedico(medico).subscribe({
        next: () => {
          console.log("Médico eliminado");
          this.cargarMedicos();

        },
        error: (err) => {
          console.error("Error al eliminar médico:", err);
          // Aquí podrías usar tu ToastService para notificar error
        }
      });
    }
  }


}
