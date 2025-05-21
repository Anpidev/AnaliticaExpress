import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // NgForm
import { CommonModule, TitleCasePipe } from '@angular/common'; // CommonModule y TitleCasePipe
import { Analitica } from '../../models/analitica';
import { Paciente } from '../../models/paciente';
import { Medico } from '../../models/medico';
import { AnaliticaService } from '../../services/analitica-service';
import { Parametros } from '../../models/parametros';
import { EstadoAnalitica } from '../../models/estado-analitica';
import { Router, RouterLink } from '@angular/router'; // RouterLink

@Component({
  selector: 'app-formulario-analitica',
  standalone: true, // Si es standalone
  imports: [
    FormsModule,
    CommonModule, // Incluye NgForOf, NgIf, NgClass, TitleCasePipe
    RouterLink
  ],
  templateUrl: './formulario-analitica.component.html',
  styleUrls: ['./formulario-analitica.component.css']
})
export class FormularioAnaliticaComponent implements OnInit {
  pacientes: Paciente[] = [];
  medicos: Medico[] = [];

  analitica: Analitica = {
    id: 0, // O null si tu backend lo maneja así para creación
    pacienteId: undefined as any, // Para que el placeholder del select funcione con required
    medicoId: undefined as any,   // Para que el placeholder del select funcione con required
    fechaCreacion: new Date(),    // O un string si manejas fechas como string
    estado: EstadoAnalitica.CREADA,
    observaciones: '',
    parametros: [],
    // Inicializa los campos de nombre/apellido a string vacío si los usas en el modelo
    pacienteNombre: '',
    pacienteApellido: '',
    pacienteDni: '',
    medicoNombre: '',
    medicoApellido: '',
    medicoColegiado: ''
  };

  todosParametros: string[] = Object.values(Parametros); // Si Parametros es un enum con valores string
  // Si Parametros es un enum simple, usa Object.keys y filtra

  constructor(private analiticaService: AnaliticaService, public router: Router) {}

  ngOnInit(): void {
    this.cargarPacientes();
    this.cargarMedicos();
    // Inicializar fechaCreacion al día actual si no lo hace el constructor de Analitica
    if (!this.analitica.fechaCreacion) {
      const today = new Date();
      // Formatear a YYYY-MM-DD para el input type="date"
      this.analitica.fechaCreacion = today.toISOString().split('T')[0] as any;
    }
  }

  cargarPacientes(): void {
    this.analiticaService.buscarPacientes().subscribe((datos) => {
      this.pacientes = datos;
    });
  }

  cargarMedicos(): void {
    this.analiticaService.buscarMedicos().subscribe((datos) => {
      this.medicos = datos;
    });
  }

  isParametroSelected(parametroValue: string): boolean {
    // Asumimos que this.analitica.parametros es un array de los valores string del enum Parametros
    return this.analitica.parametros?.includes(parametroValue as Parametros) ?? false;
  }

  toggleParametro(parametroValue: string): void {
    if (!this.analitica.parametros) {
      this.analitica.parametros = [];
    }
    const parametroEnum = parametroValue as Parametros; // Casteo a tu tipo enum Parametros
    const index = this.analitica.parametros.indexOf(parametroEnum);

    if (index > -1) {
      this.analitica.parametros.splice(index, 1);
    } else {
      this.analitica.parametros.push(parametroEnum);
    }
    // console.log('Parámetros seleccionados:', this.analitica.parametros); // Para depurar
  }

  public submit(): void {
    // Validar si al menos un parámetro está seleccionado, si es un requisito
    if (!this.analitica.parametros || this.analitica.parametros.length === 0) {
      console.warn("Debe seleccionar al menos un parámetro.");
      // this.toastService.showToast('warn', 'Atención', 'Debe seleccionar al menos un parámetro.');
      return; // Detener el envío si no hay parámetros seleccionados (si es obligatorio)
    }

    console.log('Analítica a enviar:', this.analitica);

    this.analiticaService.insertarAnalitica(this.analitica).subscribe({
      next: () => {
        console.log("Información añadida");
        // this.toastService.showToast('success', 'Éxito', 'Analítica creada correctamente.');
        this.router.navigateByUrl("/analiticas");
      },
      error: (err) => {
        console.error("Error al crear analítica:", err);
        // this.toastService.showToast('error', 'Error', 'No se pudo crear la analítica.');
      }
    });
  }
}
