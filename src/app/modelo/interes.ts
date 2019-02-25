export class Interes {
  //atributos
  public nombre:string;
  public descripcion:string;
  public importancia:number;

  constructor(_nombre:string,_description:string,_importancia:number){
    this.nombre=_nombre;
    this.descripcion=_description;
    this.importancia=_importancia;
  }
}
