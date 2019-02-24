import { Component, OnInit } from '@angular/core';
import { ServicioPersonasService } from '../servicio-personas.service';
import { Filtro } from '../modelo/filtro';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  filtro:Filtro;
  numeroPersonas:number;
  constructor(_servicio:ServicioPersonasService) {
    this.filtro=_servicio.getFiltro();
    this.numeroPersonas=_servicio.getNumeroPersonasFiltro();
   }

  ngOnInit() {
  }

}
