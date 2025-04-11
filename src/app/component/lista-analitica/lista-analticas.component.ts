import { Component } from '@angular/core';
import {Analitica} from '../../models/analitica';
import {NgForOf, NgIf} from '@angular/common';
import {AnaliticaService} from '../../services/analitica-service';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-lista-analitica',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './lista-analticas.component.html',
  styleUrl: './lista-analticas.component.css'
})
export class ListaAnalticasComponent {
 analiticas: Analitica[]=[];

 constructor(public analiticaService:AnaliticaService) {
   this.analiticaService.buscarAnaliticas().subscribe((datos)=>{
     this.analiticas=datos;

   })
 }


  borrar(analitica:Analitica){
   this.analiticaService.borrarAnalitica(analitica).subscribe(()=>{
     console.log("Analítica eliminida")
   })
 }
}

