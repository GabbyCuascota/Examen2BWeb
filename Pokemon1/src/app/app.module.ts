import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './Login/login.component';
import {ContenedorComponent} from './contenedor/contenedor.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {TseleccionComponent} from "./tseleccion/tseleccion.component";
import {TseleccionaComponent} from "./tselecciona/tselecciona.component";
import {TconfirmacionComponent} from "./tconfirmacion/tconfirmacion.component";
import { EquipofutbolComponent } from './equipofutbol/equipofutbol.component';
import { JugadorComponent } from './jugador/jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContenedorComponent,
    UsuariosComponent,
    TransferenciaComponent,
    TseleccionComponent,
    TconfirmacionComponent,
    TseleccionaComponent,
    EquipofutbolComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
