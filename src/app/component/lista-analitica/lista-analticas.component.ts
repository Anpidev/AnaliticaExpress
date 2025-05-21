import { Component } from '@angular/core';
import { Analitica } from '../../models/analitica';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import { AnaliticaService } from '../../services/analitica-service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-lista-analitica',
  imports: [
    NgForOf,
    DatePipe,
    NgClass,
  ],
  templateUrl: './lista-analticas.component.html',
  styleUrls: ['./lista-analticas.component.css']
})
export class ListaAnalticasComponent {
  analiticas: Analitica[] = [];

  constructor(public analiticaService: AnaliticaService, public authService:AuthService) {
    this.cargarAnaliticas();
  }

  cargarAnaliticas() {
    this.analiticaService.buscarAnaliticas().subscribe((datos) => {
      this.analiticas = datos;
    });
  }

  borrar(analitica: Analitica) {
    this.analiticaService.borrarAnalitica(analitica).subscribe(() => {
      console.log("Analítica eliminada");
      // Recargar la lista después de borrar la analítica
      this.cargarAnaliticas();
    });
  }
}


