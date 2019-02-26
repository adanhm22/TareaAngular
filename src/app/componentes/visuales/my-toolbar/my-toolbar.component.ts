import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import { ServicioPersonasService } from 'src/app/servicio-personas.service';
import { Filtro } from 'src/app/modelo/filtro';
import {  Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  servicio:ServicioPersonasService;
  location:Location;
  routes:Router;
  constructor(_servicio:ServicioPersonasService,_location:Location,_routes:Router) {
    this.servicio=_servicio;
    this.location=_location;
    this.routes=_routes;
   }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  emparejar(){
    let emparejado:Persona=this.servicio.emparejar();
    this.routes.navigate(['/info-usuario',emparejado.codigo])
  }

}
