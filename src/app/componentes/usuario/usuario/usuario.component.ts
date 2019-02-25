import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @Input() persona:Persona;

  constructor() {

  }

  ngOnInit() {

  }

}
