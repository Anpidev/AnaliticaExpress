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
    NgIf
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
      console.log('Analíticas recibidas:', this.analiticas);
      // Inspecciona cada analitica y su propiedad 'parametros'
      this.analiticas.forEach(a => {
        console.log(`ID: ${a.id}, Parámetros:`, a.parametros, `Tipo: ${typeof a.parametros}, Longitud: ${a.parametros ? a.parametros.length : 'N/A'}`);
      });
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


