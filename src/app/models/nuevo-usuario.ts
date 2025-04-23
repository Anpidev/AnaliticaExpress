import {Roles} from './roles';

export interface NuevoUsuario {
  nombreUsuario:string,
  password:string,
  rol:Roles
}
