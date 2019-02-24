import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';
import { FiltroComponent } from './filtro/filtro.component';
import { UsuarioInformacionComponent } from './usuario-informacion/usuario-informacion.component';

const routes: Routes =[
  {path: '',redirectTo: 'home' ,pathMatch: 'full'},
  {path: 'home', component: ListaUsuariosComponent},
  {path: 'filtrar',component: FiltroComponent},
  {path: 'info-usuario/:id',component: UsuarioInformacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
