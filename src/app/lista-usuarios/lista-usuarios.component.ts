import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaPersonas:Persona[];

  constructor(_servicio:ServicioPersonasService) {
    this.listaPersonas=_servicio.getPersonasFiltro();
   }

  ngOnInit() {
  }

}
