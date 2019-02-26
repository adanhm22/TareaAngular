import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
import { ServicioPersonasService } from 'src/app/servicio-personas.service';
import { Persona } from '../../../modelo/persona';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css']
})
export class EnviarMailComponent implements OnInit {
  enviando:boolean;
  persona:Persona;
  location:Location;
  nombre:string;
  email:string;
  constructor(route: ActivatedRoute,servicio:ServicioPersonasService,_location:Location) {
    let id = route.snapshot.params['id'];
    this.persona=servicio.getPersona(id);
    this.location=_location;
    this.nombre=this.persona.nombre;
    this.email=this.persona.email;
   }

  ngOnInit() {
  }

  enviarMail(){
    this.enviando=true;
    setTimeout(() => {
      this.location.back();
      }, 2000);
  }

  volverAtras(){
    this.location.back();
  }
}
