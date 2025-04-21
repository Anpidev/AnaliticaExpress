import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginUsuario} from '../models/login-usuario';
import {NuevoUsuario} from '../models/nuevo-usuario';
import {Observable} from 'rxjs';
import {Usuario} from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {
  }

  login(loginUsuario: LoginUsuario) {
    return this.http.post(`http://localhost:8080/webapi/auth/login`, loginUsuario, {
      withCredentials: true,
    });
  }

  register(nuevoUsuario: NuevoUsuario) {
    return this.http.post(`http://localhost:8080/webapi/auth/register`, nuevoUsuario, {
      withCredentials: true,
    });
  }

  getDetails(): Observable<Usuario> {
    return this.http.get<Usuario>('http://localhost:8080/webapi/auth/usuario/detalles', {
      withCredentials: true,
    });
  }
}
