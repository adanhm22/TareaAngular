import { Component, OnInit, Input } from '@angular/core';
import { ServicioPersonasService } from '../servicio-personas.service';
import { Filtro } from '../modelo/filtro';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  servicio:ServicioPersonasService;
  constructor(_servicio:ServicioPersonasService) {
    this.servicio=_servicio;
   }

  ngOnInit() {
  }

}
