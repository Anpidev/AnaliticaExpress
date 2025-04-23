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
    return this.http.get<Analitica[]>('https://tfg-m6og.onrender.com/webapi/analiticas', { withCredentials: true });
  }

  public buscarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('https://tfg-m6og.onrender.com/webapi/pacientes', { withCredentials: true });
  }

  public buscarMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>('https://tfg-m6og.onrender.com/webapi/medicos', { withCredentials: true });
  }

  // Métodos para mandar datos al back POST
  public insertarAnalitica(analitica: Analitica): Observable<Analitica> {
    return this.http.post<Analitica>('https://tfg-m6og.onrender.com/webapi/analiticas', analitica, { withCredentials: true });
  }

  public insertarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('https://tfg-m6og.onrender.com/webapi/pacientes', paciente, { withCredentials: true });
  }

  public insertarMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>('https://tfg-m6og.onrender.com/webapi/medicos', medico, { withCredentials: true });
  }

  // Métodos para borrar
  public borrarAnalitica(analitica: Analitica): Observable<Analitica> {
    return this.http.delete<Analitica>(`https://tfg-m6og.onrender.com/webapi/analiticas/${analitica.id}`, { withCredentials: true });
  }

  public borrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.delete<Paciente>(`https://tfg-m6og.onrender.com/webapi/pacientes/${paciente.id}`, { withCredentials: true });
  }

  public borrarMedico(medico: Medico): Observable<Medico> {
    return this.http.delete<Medico>(`https://tfg-m6og.onrender.com/webapi/medicos/${medico.id}`, { withCredentials: true });
  }

  // Metodo para actualizar el estado
  public actualizarEstado(analitica: Analitica): Observable<Analitica> {
    return this.http.put<Analitica>(`https://tfg-m6og.onrender.com/webapi/analiticas/${analitica.id}`, analitica, { withCredentials: true });
  }

}
