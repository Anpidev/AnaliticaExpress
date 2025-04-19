import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { TokenJWTService } from '../services/token-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenJWTService:TokenJWTService) {}

  canActivate(): boolean {
    if (this.tokenJWTService.token!="") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
