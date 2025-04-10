import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analitica } from '../models/analitica';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class AnaliticaService {

  constructor(public http: HttpClient) { }

  // Métodos para obtener datos GET
  public buscarAnaliticas(): Observable<Analitica[]> {
    return this.http.get<Analitica[]>('http://localhost:8080/webapi/analiticas');
  }

  public buscarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8080/webapi/pacientes');
  }

  public buscarMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>('http://localhost:8080/webapi/medicos');
  }

  // Métodos para mandar datos al back POST
  public insertarAnalitica(analitica: Analitica): Observable<Analitica> {
    return this.http.post<Analitica>('http://localhost:8080/webapi/analiticas', analitica);
  }

  // Metodos para borrar
  public borrarAnalitica(analitica: Analitica): Observable<Analitica> {
    return this.http.delete<Analitica>(`http://localhost:8080/webapi/analiticas/${analitica.id}`);
  }
}
