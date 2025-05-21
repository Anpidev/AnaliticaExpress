import { Component, OnInit } from '@angular/core';
import { Analitica } from '../../models/analitica';
import { FormsModule, NgForm } from '@angular/forms'; // NgForm para la referencia
import {NgClass, NgForOf, NgIf} from '@angular/common';      // CommonModule o NgIf/NgForOf
import { EstadoAnalitica } from '../../models/estado-analitica';
import { AnaliticaService } from '../../services/analitica-service';
import { Router, RouterLink } from '@angular/router';   // RouterLink

@Component({
  selector: 'app-formulario-estado',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink,
    NgClass,
    // Para los botones de cancelar/volver
  ],
  templateUrl: './formulario-estado.component.html',
  styleUrls: ['./formulario-estado.component.css']
})
export class FormularioEstadoComponent implements OnInit {
  analiticas: Analitica[] = [];
  // Inicializar analiticaSeleccionada como undefined para que el placeholder funcione
  analiticaSeleccionada: Analitica | undefined = undefined;
  estados = Object.values(EstadoAnalitica);

  constructor(private analiticaService: AnaliticaService, public router: Router) {}

  ngOnInit(): void {
    this.analiticaService.buscarAnaliticas().subscribe(data => {
      this.analiticas = data;
    });
  }

  compararAnaliticas(a1: Analitica, a2: Analitica): boolean {
    return a1 && a2 ? a1.id === a2.id : a1 === a2;
  }

  public submit(): void {
    // La validación principal se hace en la plantilla con (ngSubmit)
    // y el botón [disabled] también verifica !analiticaSeleccionada

    if (this.analiticaSeleccionada) { // Doble verificación por si acaso
      console.log('Analítica a actualizar:', this.analiticaSeleccionada);
      this.analiticaService.actualizarEstado(this.analiticaSeleccionada).subscribe({
        next: () => {
          console.log("Estado actualizado");
          // this.toastService.showToast('success', 'Éxito', 'Estado de la analítica actualizado.');
          this.router.navigateByUrl("/analiticas");
        },
        error: (err) => {
          console.error("Error al actualizar estado:", err);
          // this.toastService.showToast('error', 'Error', 'No se pudo actualizar el estado.');
        }
      });
    } else {
      console.warn("Intento de submit sin analítica seleccionada (esto no debería pasar si el botón está bien deshabilitado).");
    }
  }
}
