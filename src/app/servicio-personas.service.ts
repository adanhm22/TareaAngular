import { Injectable } from '@angular/core';
import {Persona} from './modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {
  personas:Persona[]=new Array;
  usuario:Persona;
  constructor() {
    //usuario
    this.usuario=new Persona(0,"p1","persona 1"
    ,"https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg",20,"hombre","algo@algo.com",0);

    //resto de personas
    for (let i:number = 0;i<10;i++){
      this.addPersona(new Persona(i,"persona "+i,"personificacion "+i,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Red_and_blue_pill.jpg/1920px-Red_and_blue_pill.jpg",i,"hombre",
    "prueba@prueba.prueba"));
    }

   }

   getUsuario(){
     return this.usuario;
   }

   addPersona(persona:Persona){
     this.personas.push(persona);
   }

   getPersona(indice:number){
     return this.personas[indice];
   }

   getPersonaPorNombre(nombre:string){
     let indice:number= this.personas.findIndex(e=>e.nombre==nombre);
     if(indice!=-1){
       return this.personas[indice];
     }else{
       return null;
     }
   }

}
