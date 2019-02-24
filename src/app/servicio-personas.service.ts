import { Injectable } from '@angular/core';
import {Persona} from './modelo/persona';
import {Filtro} from './modelo/filtro'

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {
  private personasTotales:Persona[]=new Array;
  private personasFiltro:Persona[]= new Array;
  private filtro:Filtro;

  usuario:Persona;
  constructor() {
    //usuario
    this.usuario=new Persona(0,"p1","persona 1"
    ,"https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg",20,"hombre","algo@algo.com",0);

    //resto de personas

      this.addPersona(new Persona(0,"persona "+0,"personificacion "+0,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Red_and_blue_pill.jpg/1920px-Red_and_blue_pill.jpg",0,"hombre",
    "prueba@prueba.prueba"));
    this.personasTotales[0].direccion="sotrondio";



    this.addPersona(new Persona(1,"persona "+1,"personificacion "+1,
    "https://images-na.ssl-images-amazon.com/images/I/81Mh4fn2e4L.jpg",1,"mujer",
  "prueba@prueba.prueba"));

    this.addPersona(new Persona(2,"persona "+2,"personificacion "+2,
    "https://vignette.wikia.nocookie.net/d68395ad-0cc5-444d-bf19-3e0824b8e369/scale-to-width-down/800",2,"hombre",
  "prueba@prueba.prueba"));
  this.personasTotales[2].direccion="sotrondio";

  this.addPersona(new Persona(3,"persona "+3,"personificacion "+3,
  "http://los40mx00.epimg.net/los40/imagenes/2018/11/06/cinetv/1541462533_120966_1541463824_gigante_normal.jpg",3,"hombre",
  "prueba@prueba.prueba"));

    this._aplicarFiltro();
   }

   getUsuario(){
     return this.usuario;
   }

   addPersona(persona:Persona){
     this.personasTotales.push(persona);
     this._aplicarFiltro;
   }

   getPersona(indice:number){
     return this.personasTotales[indice];
   }

   getPersonaPorNombre(nombre:string){
     let indice:number= this.personasTotales.findIndex(e=>e.nombre==nombre);
     if(indice!=-1){
       return this.personasTotales[indice];
     }else{
       return null;
     }
   }

   addFiltro(filtro:Filtro){
     this.filtro=filtro;
     this._aplicarFiltro;
   }

   _aplicarFiltro(){
     this.personasFiltro=[];
     if(this.filtro!=null){
     for (let persona of this.personasTotales){
       if(this.filtro.isValid(persona)){
         this.personasFiltro.push(persona);
       }
     }
   }else this.personasFiltro=this.personasTotales;
   }

   getPersonasFiltro(){
     return this.personasFiltro;
   }

   getFiltro(){
     return this.filtro;
   }

   getNumeroPersonas(){
     return this.personasTotales.length;
   }

   getNumeroPersonasFiltro(){
     return this.personasFiltro.length;
   }

}
