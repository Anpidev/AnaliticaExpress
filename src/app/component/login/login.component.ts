import { Component } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {TokenJWTService} from '../../services/token-jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  usuario:Usuario ={} as Usuario;

//Inyección del servicio por constructor
  constructor(private loginService:LoginService,private tokenJWTService:TokenJWTService,private  router:Router) {
  }

  submit() {
    console.log(this.usuario);
    this.loginService.login(this.usuario).subscribe((datos:any)=>{
      this.tokenJWTService.token=datos.headers.get("Authorization");
      console.log(this.tokenJWTService.token);
      this.router.navigateByUrl("home");
      }
    )}
}
