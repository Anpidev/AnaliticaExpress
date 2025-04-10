import {EstadoAnalitica} from './estado-analitica';
import {Parametros} from './parametros';

export class Analitica {
 constructor(
  public id: number,
  public  pacienteId: number,
  public  pacienteNombre: string,
  public pacienteApellido: string,
  public pacienteDni: string,
  public medicoId: number,
  public medicoNombre: string,
  public medicoApellido: string,
  public medicoColegiado:string,
  public fechaCreacion: Date,
  public estado: EstadoAnalitica,
  public observaciones: string,
  public parametros: Parametros[],
  public expandido?: boolean,
 ) {
 }



}
