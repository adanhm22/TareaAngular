import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common';
import {Persona} from 'src/app/modelo/persona'
import { Interes } from '../../../modelo/interes';
import { ServicioPersonasService } from '../../../servicio-personas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-interes',
  templateUrl: './add-interes.component.html',
  styleUrls: ['./add-interes.component.css']
})
export class AddInteresComponent implements OnInit {
  persona:Persona;
  interes:Interes;
  location:Location;
  servicio:ServicioPersonasService;
  constructor(_location:Location,_servicio:ServicioPersonasService,route: ActivatedRoute) {
    this.interes=new Interes("","",0);
    this.location=_location;
    this.servicio=_servicio;
    let indice:number=route.snapshot.params['id'];
    this.persona=_servicio.getPersona(indice);
   }

  ngOnInit() {
  }

  addInteres(){
    this.persona.intereses.push(this.interes);
    this.location.back();
  }
}
