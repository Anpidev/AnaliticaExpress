import { Component, OnInit } from '@angular/core';
import { Analitica } from '../../models/analitica';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { EstadoAnalitica } from '../../models/estado-analitica';
import { AnaliticaService } from '../../services/analitica-service';

@Component({
  selector: 'app-formulario-estado',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './formulario-estado.component.html',
  styleUrl: './formulario-estado.component.css'
})
export class FormularioEstadoComponent implements OnInit {
  analiticas: Analitica[] = [];
  analiticaSeleccionada?: Analitica;
  estados = Object.values(EstadoAnalitica);

  constructor(private analiticaService: AnaliticaService) {}

  ngOnInit(): void {
    this.analiticaService.buscarAnaliticas().subscribe(data => {
      this.analiticas = data;
    });
  }

  compararAnaliticas(a1: Analitica, a2: Analitica): boolean {
    return a1 && a2 ? a1.id === a2.id : a1 === a2;
  }

  public submit(): void {
    if (this.analiticaSeleccionada) {
      this.analiticaService.actualizarEstado(this.analiticaSeleccionada).subscribe(() => {
        console.log("Estado actualizado");
      });
    } else {
      console.warn("No has seleccionado ninguna analítica.");
    }
  }
}
