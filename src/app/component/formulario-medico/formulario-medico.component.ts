import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // NgForm sigue siendo útil para la referencia #medicoForm
import { CommonModule } from '@angular/common'; // CommonModule incluye NgIf, NgClass, etc.
import { Medico } from '../../models/medico';
import { AnaliticaService } from '../../services/analitica-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-medico',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './formulario-medico.component.html',
  styleUrls: ['./formulario-medico.component.css']
})
export class FormularioMedicoComponent {
  medico: Medico = {
    id: 0,
    nombre: '',
    apellido: '',
    colegiado: '',
    email: '',
    telefono: ''
  };

  constructor(private analiticaService: AnaliticaService, public router: Router) {}

  public submit(): void {
    // Ya no necesitamos verificar medicoForm.invalid aquí porque
    // (ngSubmit) en la plantilla solo llama a submit() si el formulario es válido.

    console.log('Datos del médico a enviar:', this.medico); // Para depurar

    this.analiticaService.insertarMedico(this.medico).subscribe({
      next: () => {
        console.log("Médico añadido");
        // this.toastService.showToast('success', 'Éxito', 'Médico guardado correctamente');
        this.router.navigateByUrl("/medicos");
      },
      error: (err) => {
        console.error("Error al añadir médico:", err);
        // this.toastService.showToast('error', 'Error', 'No se pudo guardar el médico. ' + (err.error?.mensaje || err.message));
      }
    });
  }
}
