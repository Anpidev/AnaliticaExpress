import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Usuario} from '../../models/usuario';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 usuario: Usuario | undefined

  constructor(private readonly authService:AuthService) {
  }

  ngOnInit(){
   this.authService.getDetails().subscribe((data)=>{
     this.usuario=data;
   });
  }
}
