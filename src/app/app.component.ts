import { Component } from '@angular/core';
import { Persona } from './modelo/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-angular';
  persona:Persona;
  constructor(){
    this.persona=new Persona(0,"p1","persona 1"
    ,new URL("https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg"),20,"hombre","algo@algo.com",0);
  }
}
