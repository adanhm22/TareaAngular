import { Component, OnInit,Input } from '@angular/core';
import {Persona} from 'src/app/modelo/persona'
import {ActivatedRoute} from '@angular/router';
import { ServicioPersonasService } from 'src/app/servicio-personas.service';

@Component({
  selector: 'app-usuario-informacion',
  templateUrl: './usuario-informacion.component.html',
  styleUrls: ['./usuario-informacion.component.css']
})
export class UsuarioInformacionComponent implements OnInit {
  persona:Persona;
  id:number;

  constructor(route: ActivatedRoute,servicio:ServicioPersonasService) {
    this.id=route.snapshot.params['id'];
    this.persona=servicio.getPersona(this.id);
    servicio.setEntrando(true);
   }

  ngOnInit() {

  }

  borrado(_nombre:string){
    let numero:number= this.persona.intereses.findIndex(e=>e.nombre==_nombre);
    this.persona.intereses.splice(numero,1);
  }

  darMeGusta(){
    this.persona.votos+=1;
  }

}
