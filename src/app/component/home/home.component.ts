import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Roles } from '../../models/roles';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuario: Usuario = {
    id: 0,
    nombreUsuario: '',
    password:'',
    rol: { id: 0, nombre: '' }, // Inicializamos el rol vacío
  };

  constructor(public authService: AuthService, private readonly router: Router,
              private readonly toastService: ToastService) {}

  ngOnInit() {
    this.authService.getDetails().subscribe((data) => {
      this.usuario = data;
      this.authService.setUsuario(data);
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.toastService.showToast('success', 'Sesión cerrada', '');
        this.router.navigateByUrl('');
      },
      error: () => {
        this.toastService.showToast('error', 'Sesión cerrada', 'No se pudo cerrar la sesión');
      }
    });
  }



}
