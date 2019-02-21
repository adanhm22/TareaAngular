import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';

const routes: Routes =[
  {path: '',redirectTo: 'home' ,pathMatch: 'full'},
  {path: 'home', component: ListaUsuariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
