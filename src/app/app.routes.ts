import { Routes } from '@angular/router';
import {AuthComponent} from './auth/auth.component';

export const routes: Routes = [
  {path:"auth", component:AuthComponent, title:"Iniciar Sesión"},
  {path:"", redirectTo:"/auth", pathMatch:"full"},
  {path:"registro", loadComponent:()=>
  import('./register/register.component').then((m)=>m.RegisterComponent),title:"Registrarse"},
  {path:"home", loadComponent:()=>
      import('./component/home/home.component').then((m)=>m.HomeComponent),title:"Inicio"},
  {path:"analiticas", loadComponent:()=>
      import('./component/lista-analitica/lista-analticas.component').then((m)=>m.ListaAnalticasComponent),title:"Analiticas"},
  {path:"formularioAnalitica", loadComponent:()=>
      import('./component/formulario-analitica/formulario-analitica.component').then((m)=>m.FormularioAnaliticaComponent),title:"Formulario Analitica"},
  {path:"estado", loadComponent:()=>
      import('./component/formulario-estado/formulario-estado.component').then((m)=>m.FormularioEstadoComponent),title:"Cambio de estado"},
  {path:"pacientes", loadComponent:()=>
      import('./component/lista-paciente/lista-paciente.component').then((m)=>m.ListaPacienteComponent),title:"Pacientes"},
  {path:"formularioPaciente", loadComponent:()=>
      import('./component/formulario-paciente/formulario-paciente.component').then((m)=>m.FormularioPacienteComponent),title:"Formulario Pacientes"},
  {path:"medicos", loadComponent:()=>
      import('./component/lista-medico/lista-medico.component').then((m)=>m.ListaMedicoComponent),title:"Medicos"},
  {path:"formularioMedico", loadComponent:()=>
      import('./component/formulario-medico/formulario-medico.component').then((m)=>m.FormularioMedicoComponent),title:"Formulario Medico"},
  {path:"**", redirectTo:"", pathMatch:"full"},

];
