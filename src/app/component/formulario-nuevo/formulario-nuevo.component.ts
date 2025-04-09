import {Component, NgModule, NgModuleRef, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Analitica} from '../../models/analitica';
import {CommonModule, NgFor} from '@angular/common';
import {Paciente} from '../../models/paciente';
import {Medico} from '../../models/medico';
import {AnaliticaService} from '../../services/analitica-service';
import {Parametros} from '../../models/parametros';

@Component({
  selector: 'app-formulario-nuevo',
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './formulario-nuevo.component.html',
  styleUrl: './formulario-nuevo.component.css'
})
export class FormularioNuevoComponent implements  OnInit{

  // Array de pacientes y medicos
  pacientes: Paciente[]=[];
  medicos: Medico[]=[];

  // Datos del formulario actual
  analitica: Analitica = {
    ...{} as Analitica,
    parametros: [] // Inicializamos solo el array necesario
  };
//Inyeccion del service
  constructor(private analiticaService: AnaliticaService) {}

  public submit():void{
    console.log(this.analitica);
  }

  ngOnInit(): void {
    this.cargarPacientes();
    this.cargarMedicos();
  }
  cargarPacientes(): void {
    this.analiticaService.buscarPacientes().subscribe((datos)=>{
      this.pacientes=datos;
    });
  }

  cargarMedicos(): void {
    this.analiticaService.buscarMedicos().subscribe((datos)=>{
      this.medicos=datos;
    });
  }

  // Obtenemos los valores string del enum
  todosParametros: string[] = Object.values(Parametros)
    .filter(v => typeof v === 'string');

  //Metodo para verificar selección
  isParametroSelected(parametro: string): boolean {
    return this.analitica.parametros?.includes(parametro as unknown as Parametros) ?? false;
  }

  //Metodo para alternar parámetros
  toggleParametro(parametro: string): void {
    if (!this.analitica.parametros) this.analitica.parametros = [];

    const parametroEnum = parametro as unknown as Parametros;
    const index = this.analitica.parametros.indexOf(parametroEnum);

    if (index > -1) {
      this.analitica.parametros.splice(index, 1);
    } else {
      this.analitica.parametros.push(parametroEnum);
    }
  }
}
