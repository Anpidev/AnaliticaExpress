import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginForm!:FormGroup

  constructor(private readonly  fb:FormBuilder, private  readonly authService:AuthService,
              private readonly router:Router) {
    this.loginForm=this.fb.group(
      {
        nombreUsuario:['',[Validators.required]],
        password:['',[Validators.required]]
      });
  }
  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next:()=>{
          console.log('Login ok');
          this.router.navigateByUrl('/home');
        },
        error:(err)=>{
          console.log(err.error.message);
        },
      });
    }
  }
}


