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
  constructor(route: ActivatedRoute,servicio:ServicioPersonasService) {
    this.persona=servicio.getPersona(route.snapshot.params['id']);

   }

  ngOnInit() {

  }

  borrado(_nombre:string){
    let numero:number= this.persona.intereses.findIndex(e=>e.nombre==_nombre);
    this.persona.intereses.splice(numero,1);
  }

}
