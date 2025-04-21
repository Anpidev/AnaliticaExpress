import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!:FormGroup

  constructor(private readonly  fb:FormBuilder, private  readonly authService:AuthService, private readonly router: Router) {
    this.registerForm=this.fb.group(
      {
        nombreUsuario:['',[Validators.required]],
        password:['',[Validators.required]],
        rol:['',[Validators.required]],
      });
  }
  register(){
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next:()=>{
          console.log('Registro ok');
          this.router.navigate(['/auth']);
        },
        error:()=>{
          console.log(' Error')
        },
      });
    }
  }
}
