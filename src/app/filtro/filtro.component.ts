import { Component, OnInit } from '@angular/core';
import {Filtro} from '../modelo/filtro';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  filtro:Filtro;
  servicio:ServicioPersonasService;
  constructor(_servicio:ServicioPersonasService) {
    this.filtro=new Filtro("","",0,0);
    this.servicio=_servicio;
   }

  ngOnInit() {
  }

  addFiltro(){
    this.servicio.addFiltro(this.filtro);
    console.log("hola");
  }
}
