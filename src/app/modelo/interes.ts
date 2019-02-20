export class Interes {
  //atributos
  public nombre:string;
  public descripcion:Text;
  public importancia:number;

  constructor(_nombre:string,_description:Text,_importancia:number){
    this.nombre=_nombre;
    this.descripcion=_description;
    this.importancia=_importancia;
  }
}
