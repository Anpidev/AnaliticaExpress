import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenJWTService {

  token:string="";
  constructor() { }
}
