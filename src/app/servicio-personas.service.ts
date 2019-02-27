import { Injectable } from '@angular/core';
import { Persona } from './modelo/persona';
import { Filtro } from './modelo/filtro'
import { Interes } from './modelo/interes';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {
  private personasTotales: Persona[] = new Array;
  private personasFiltro: Persona[] = new Array;
  private filtro: Filtro;
  private entrando: boolean;

  usuario: Persona;
  constructor() {

    this.filtro = new Filtro("", "", 0, 0);
    //usuario necesita tener id -2 para que luego se encuentre de manera mas facil
    this.usuario = new Persona(-2, "Usuario aplicacion", "apellido"
      , "https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg", 20, "mujer", "algo@algo.com");

    //resto de personas

    this.addPersona(new Persona(0, "pildoras ", "azulroja ",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Red_and_blue_pill.jpg/1920px-Red_and_blue_pill.jpg", 20, "hombre",
      "prueba@prueba.prueba"));
    this.personasTotales[0].ciudad = "sotrondio";
    let interes: Interes = new Interes("futbol", "me gusta el futbol", 8);
    this.personasTotales[0].intereses.push(interes);



    this.addPersona(new Persona(1, "2b ", "yorha",
      "https://images-na.ssl-images-amazon.com/images/I/81Mh4fn2e4L.jpg", 22, "mujer",
      "prueba@prueba.prueba","inexistente"));

    this.addPersona(new Persona(2, "amamiya", "kurusu ",
      "https://vignette.wikia.nocookie.net/d68395ad-0cc5-444d-bf19-3e0824b8e369/scale-to-width-down/800", 17, "hombre",
      "prueba@prueba.prueba","sotrondio"));
    this.personasTotales[2].ciudad = "sotrondio";

    this.addPersona(new Persona(3, "Don ramón", "Valdés " ,
      "http://los40mx00.epimg.net/los40/imagenes/2018/11/06/cinetv/1541462533_120966_1541463824_gigante_normal.jpg", 64, "hombre",
      "prueba@prueba.prueba","el entrego"));
      this.addPersona(new Persona(4,"Alejandro","sanz",
    "https://www.lecturas.com/medio/2017/07/14/alejandro-sanz_e7d02e6b_800x490.jpg",5,"hombre","alejandro@gmail.com"));

    this.addPersona(new Persona(5,"Rosalia","Vila",
  "https://www.abc.es/media/cultura/2018/07/24/rosalia-kENB--1248x698@abc.jpg",25,"mujer","rosalia@gmail.com","sotrondio"));

  this.addPersona(new Persona(6,"willyrex","willy",
  "https://esports.as.com/2018/11/14/willyrex/Willyrex-competira-Ninja-creador-contenido_1190890907_117251_1440x600.jpg",25,"hombre","willy@gmail.com"));

  this.addPersona(new Persona(7,"nikola","tesla",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tesla_Sarony.jpg/200px-Tesla_Sarony.jpg",34,"hombre","nikola@noexistianaunlosmail.com"));

this.addPersona(new Persona(8,"pablo","alboran",
"http://www.notodo.com/web/wp-content/uploads/alboran-1.jpg",29,"hombre","pablo@gmail.com","sevilla"));
    this._aplicarFiltro();
  }

  getUsuario() {
    return this.usuario;
  }

  addPersona(persona: Persona) {
    this.personasTotales.push(persona);
    this._aplicarFiltro;
  }

  getPersona(indice: number) {
    if (indice == -2) {
      return this.usuario;
    } else
      return this.personasTotales[indice];
  }

  getPersonaPorNombre(nombre: string) {
    let indice: number = this.personasTotales.findIndex(e => e.nombre == nombre);
    if (indice != -1) {
      return this.personasTotales[indice];
    } else {
      return null;
    }
  }

  addFiltro(_filtro: Filtro) {
    this.filtro = _filtro;
    this._aplicarFiltro();
  }

  _aplicarFiltro() {
    this.personasFiltro = new Array();


    for (let persona of this.personasTotales) {
      if (this.filtro.isValid(persona)) {
        this.personasFiltro.push(persona);
      }
    }
  }

  getPersonasFiltro() {
    return this.personasFiltro;
  }

  getFiltro() {
    return this.filtro;
  }

  getNumeroPersonas() {
    return this.personasTotales.length;
  }

  getNumeroPersonasFiltro() {
    return this.personasFiltro.length;
  }

  setEntrando(_entrando: boolean) {
    this.entrando = _entrando;
  }

  isEntrando() {
    return this.entrando;
  }

  emparejar() {

    let puntuacion: number = 0;
    let personaEmparejar:Persona=this.usuario;
    for (let personaFiltro of this.personasFiltro) {
      if (personaFiltro.sexo != this.usuario.sexo) {
        let puntuacionPersona: number = 0;
        for (let interesFiltro of personaFiltro.intereses) {
          for (let interesUsuario of this.usuario.intereses) {
            if(interesUsuario.nombre==interesFiltro.nombre){
              puntuacionPersona++;

            }
          }
        }
        if(puntuacionPersona!=0){
          if(puntuacionPersona/personaFiltro.intereses.length>=0.8){
            if(puntuacion<puntuacionPersona){
              puntuacion=puntuacionPersona;
              personaEmparejar=personaFiltro;
            }
          }
        }
      }
    }
    return personaEmparejar;
  }

}
