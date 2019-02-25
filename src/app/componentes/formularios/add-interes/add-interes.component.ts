import { Component, OnInit,Input } from '@angular/core';
import {Persona} from 'src/app/modelo/persona'

@Component({
  selector: 'app-add-interes',
  templateUrl: './add-interes.component.html',
  styleUrls: ['./add-interes.component.css']
})
export class AddInteresComponent implements OnInit {
  @Input() persona:Persona;
  constructor() { }

  ngOnInit() {
  }

}
