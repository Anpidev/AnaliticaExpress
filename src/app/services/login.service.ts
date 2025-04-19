import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Usuario} from '../models/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public login (usuario:Usuario):Observable<HttpResponse<Usuario>> {

    return this.http.post<Usuario>("http://localhost:8080/webapi/login",usuario,{observe: "response"});
  }
}
