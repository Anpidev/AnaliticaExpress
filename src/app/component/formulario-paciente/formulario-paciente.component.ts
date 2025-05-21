import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // NgForm
import { CommonModule } from '@angular/common';      // Para *ngIf, etc.
import { Paciente } from '../../models/paciente';
import { AnaliticaService } from '../../services/analitica-service';
import { Router, RouterLink } from '@angular/router'; // RouterLink

@Component({
  selector: 'app-formulario-paciente',
  standalone: true, // Si es standalone
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.css']
})
export class FormularioPacienteComponent {
  paciente: Paciente = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: ''
  };

  constructor(private analiticaService: AnaliticaService, public router: Router) {}

  public submit(): void {
    // La validación principal se hace en la plantilla con (ngSubmit)="pacienteForm.form.valid && submit()"
    console.log('Datos del paciente a enviar:', this.paciente);

    this.analiticaService.insertarPaciente(this.paciente).subscribe({
      next: () => {
        console.log("Paciente añadido");
        // this.toastService.showToast('success', 'Éxito', 'Paciente guardado correctamente');
        this.router.navigateByUrl("/pacientes");
      },
      error: (err) => {
        console.error("Error al añadir paciente:", err);
        // this.toastService.showToast('error', 'Error', 'No se pudo guardar el paciente. ' + (err.error?.mensaje || err.message));
      }
    });
  }
}
