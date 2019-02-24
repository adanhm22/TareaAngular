import {Interes} from './interes'
import {Persona} from './persona'

export class Filtro {
  localidad:string;
  interes:string;
  edadMinima:number;
  edadMaxima:number;
  constructor(_localidad:string,_interes:string,_edadMinima:number,_edadMaxima:number){
    this.localidad=_localidad;
    this.interes=_interes;
    this.edadMaxima=_edadMaxima;
    this.edadMinima=_edadMinima;
  }

  //return true si es valida, false si no lo es
  isValid(persona:Persona){
    if(persona.ciudad==this.localidad||this.localidad==null||this.localidad==""){
      if(persona.edad>=this.edadMinima||this.edadMinima==0){
        if(persona.edad<=this.edadMaxima||this.edadMaxima==0){
          if(this.interes!=null||""!=this.interes){
          for (let interes of persona.intereses){
            if(interes.nombre==this.interes){
              return true;
            }
          }
        }else return true;
        }
      }
    }
    return false;
  }

}
