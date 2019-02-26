import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyToolbarComponent } from './componentes/visuales/my-toolbar/my-toolbar.component';
 import { MatMenuModule} from '@angular/material/menu';
import { MyMenuComponent } from './componentes/visuales/my-menu/my-menu.component';
import { ListaUsuariosComponent } from './componentes/usuario/lista-usuarios/lista-usuarios.component';
import {MatCardModule} from '@angular/material/card';
import { FiltroComponent } from './componentes/formularios/filtro/filtro.component';

import { UsuarioInformacionComponent } from './componentes/usuario/usuario-informacion/usuario-informacion.component';
import { InteresComponent } from './componentes/usuario/interes/interes.component';
import { AddInteresComponent } from './componentes/formularios/add-interes/add-interes.component';
import { EnviarMailComponent } from './componentes/formularios/enviar-mail/enviar-mail.component';






@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MyToolbarComponent,
    MyMenuComponent,
    ListaUsuariosComponent,
    FiltroComponent,
    UsuarioInformacionComponent,
    InteresComponent,
    AddInteresComponent,
    EnviarMailComponent
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
