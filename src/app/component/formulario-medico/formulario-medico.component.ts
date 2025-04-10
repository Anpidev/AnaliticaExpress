import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Paciente} from '../../models/paciente';
import {Medico} from '../../models/medico';
import {AnaliticaService} from '../../services/analitica-service';

@Component({
  selector: 'app-formulario-medico',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario-medico.component.html',
  styleUrl: './formulario-medico.component.css'
})
export class FormularioMedicoComponent {
  medico: Medico = {
    ...{} as Medico,
  }
//Inyeccion del service
  constructor(private analiticaService: AnaliticaService) {}

  public submit():void{
    this.analiticaService.insertarMedico(this.medico).subscribe(()=>{
      console.log("Médico añadido")
    })
  }

}
