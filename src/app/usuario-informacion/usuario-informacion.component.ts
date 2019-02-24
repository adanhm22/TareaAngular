import { Component, OnInit,Input } from '@angular/core';
import {Persona} from '../modelo/persona'
import {ActivatedRoute} from '@angular/router';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-usuario-informacion',
  templateUrl: './usuario-informacion.component.html',
  styleUrls: ['./usuario-informacion.component.css']
})
export class UsuarioInformacionComponent implements OnInit {
  persona:Persona;
  constructor(route: ActivatedRoute,servicio:ServicioPersonasService) {
    this.persona=servicio.getPersonaPorNombre(route.snapshot.params['id']);
   }

  ngOnInit() {
  }

}
