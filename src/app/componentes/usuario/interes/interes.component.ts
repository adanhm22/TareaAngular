import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Interes } from 'src/app/modelo/interes';

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent implements OnInit {
  @Input() interes:Interes;
  @Output() borrar=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  borrado(){
    this.borrar.emit(this.interes.nombre);
  }
}
