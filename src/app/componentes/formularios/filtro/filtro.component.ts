import { Component, OnInit } from '@angular/core';
import {Filtro} from 'src/app/modelo/filtro';
import { ServicioPersonasService } from 'src/app/servicio-personas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  filtro:Filtro;
  servicio:ServicioPersonasService;
  routes:Router;
  constructor(_routes:Router,_servicio:ServicioPersonasService) {
    this.filtro=new Filtro("","",0,0);
    this.servicio=_servicio;
    this.routes=_routes;
    this.servicio.setEntrando(true);
   }

  ngOnInit() {
  }

  addFiltro(){
    this.servicio.addFiltro(this.filtro);
    this.routes.navigate(['/home']);
  }
}
