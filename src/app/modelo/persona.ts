import { Interes } from './interes';

export class Persona {
  //atributos
  public codigo:number;
  public nombre:string;
  public apellidos: string;
  public edad: number;
  public foto:string;
  public sexo:string;
  public email: string;
  public votos:number;
  public direccion:string;
  public ciudad:string;
  public telefono :number;
  public intereses:Interes[];

  /**
  Un codigo de tipo numérico y que será igual al nº de elementos
 Un nombre y apellidos para la persona
 La foto que será una url de internet, ya que no vimos manejo cámara, ni
archivos. Os pasaré yo varias urls.
 La edad
 El sexo
 El email
 El nº de votos NO SE PIDE. Por defecto es 0.
  */
  constructor(_codigo:number,_nombre:string,_apellidos:string,_url:string,
    _edad:number,_sexo:string,_email:string,_votos:number=0){
      this.codigo=_codigo;
      this.nombre=_nombre;
      this.apellidos=_apellidos;
      this.edad=_edad;
      this.foto=_url;
      this.sexo=_sexo;
      this.email=_email;
      this.votos=_votos;
  }
}
