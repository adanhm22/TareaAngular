import { Interes } from './interes';

export class Persona {
  //atributos
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
  constructor(public codigo:number,public nombre:string,public apellidos:string,public foto:string,
    public edad:number,public sexo:string,public email:string,public ciudad?:string,
    public direccion?:string,public telefono?:number,public votos:number=0){
      this.intereses=new Array(0);
  }
}
