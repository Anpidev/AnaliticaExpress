import {Rol} from './rol';

export interface Usuario {
  id:number,
  nombreUsuario:string,
  password:string,
  rol:Rol
}
