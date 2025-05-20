import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActual: Usuario | null = null;

  constructor(private readonly http: HttpClient) { }

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

  logout() {
    return this.http.post(`http://localhost:8080/webapi/auth/logout`, null, {
      withCredentials: true,
    });
  }

  setUsuario(usuario: Usuario): void {
    this.usuarioActual = usuario;
  }

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  tieneAcceso(...rolesPermitidos: string[]): boolean {
    return this.usuarioActual?.rol?.nombre
      ? rolesPermitidos.includes(this.usuarioActual.rol.nombre)
      : false;
  }
}
