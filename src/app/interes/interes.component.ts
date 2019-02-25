import { Component, OnInit, Input } from '@angular/core';
import { Interes } from '../modelo/interes';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent implements OnInit {
  @Input() interes:Interes;
  constructor() { }

  ngOnInit() {
  }

}
