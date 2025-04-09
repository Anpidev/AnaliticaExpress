import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaProductosComponent} from './component/lista-productos/lista-productos.component';
import {FormularioNuevoComponent} from './component/formulario-nuevo/formulario-nuevo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProductosComponent, FormularioNuevoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnaliticaExpress';
}
