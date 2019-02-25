import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaUsuariosComponent} from './componentes/usuario/lista-usuarios/lista-usuarios.component';
import { FiltroComponent } from './componentes/formularios/filtro/filtro.component';
import { UsuarioInformacionComponent } from './componentes/usuario/usuario-informacion/usuario-informacion.component';
import {AddInteresComponent} from './componentes/formularios/add-interes/add-interes.component';

const routes: Routes =[
  {path: '',redirectTo: 'home' ,pathMatch: 'full'},
  {path: 'home', component: ListaUsuariosComponent},
  {path: 'filtrar',component: FiltroComponent},
  {path: 'info-usuario/:id',component: UsuarioInformacionComponent},
  {path: 'add-interes/:id',component:AddInteresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
