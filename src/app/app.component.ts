import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaAnalticasComponent} from './component/lista-analtiicas/lista-analticas.component';
import {FormularioAnaliticaComponent} from './component/formulario-analitica/formulario-analitica.component';
import {ListaPacienteComponent} from './component/lista-paciente/lista-paciente.component';
import {FormularioPacienteComponent} from './component/formulario-paciente/formulario-paciente.component';
import {FormularioMedicoComponent} from './component/formulario-medico/formulario-medico.component';
import {ListaMedicoComponent} from './component/lista-medico/lista-medico.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaAnalticasComponent, FormularioAnaliticaComponent, ListaPacienteComponent, FormularioPacienteComponent, FormularioMedicoComponent, ListaMedicoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnaliticaExpress';
}
