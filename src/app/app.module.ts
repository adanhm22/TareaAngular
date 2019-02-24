import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyToolbarComponent } from './my-toolbar/my-toolbar.component';
 import { MatMenuModule} from '@angular/material/menu';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {MatCardModule} from '@angular/material/card';
import { FiltroComponent } from './filtro/filtro.component';
import { UsuarioInformacionComponent } from './usuario-informacion/usuario-informacion.component';






@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MyToolbarComponent,
    MyMenuComponent,
    ListaUsuariosComponent,
    FiltroComponent,
    UsuarioInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
