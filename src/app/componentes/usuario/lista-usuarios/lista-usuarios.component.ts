import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { ServicioPersonasService } from 'src/app/servicio-personas.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  servicio:ServicioPersonasService;

  constructor(_servicio:ServicioPersonasService) {
   this.servicio=_servicio;
   this.servicio.setEntrando(false);
   }

  ngOnInit() {
  }

}
