import { Component } from '@angular/core';
import {Analitica} from '../../models/analitica';
import {NgForOf} from '@angular/common';
import {AnaliticaService} from '../../services/analitica-service';

@Component({
  selector: 'app-lista-productos',
  imports: [
    NgForOf
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
 analiticas: Analitica[]=[];

 constructor(public analiticaService:AnaliticaService) {
   this.analiticaService.buscarAnaliticas().subscribe((datos)=>{
     this.analiticas=datos;
   })
 }
}

