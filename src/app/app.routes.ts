import { Routes } from '@angular/router';
import {ListaAnalticasComponent} from './component/lista-analitica/lista-analticas.component';
import {FormularioAnaliticaComponent} from './component/formulario-analitica/formulario-analitica.component';
import {FormularioEstadoComponent} from './component/formulario-estado/formulario-estado.component';
import {ListaPacienteComponent} from './component/lista-paciente/lista-paciente.component';
import {FormularioPacienteComponent} from './component/formulario-paciente/formulario-paciente.component';
import {ListaMedicoComponent} from './component/lista-medico/lista-medico.component';
import {FormularioMedicoComponent} from './component/formulario-medico/formulario-medico.component';

export const routes: Routes = [
  {path:"analiticas", component:ListaAnalticasComponent},
  {path:"formularioAnalitica", component:FormularioAnaliticaComponent},
  {path:"estado", component:FormularioEstadoComponent},
  {path:"pacientes", component:ListaPacienteComponent},
  {path:"formularioPaciente", component:FormularioPacienteComponent},
  {path:"medicos", component:ListaMedicoComponent},
  {path:"formularioMedico", component:FormularioMedicoComponent},
  {path:"", redirectTo:"/analiticas", pathMatch:"full"}
];
