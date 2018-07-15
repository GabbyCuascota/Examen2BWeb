import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './Login/login.component';
import {ContenedorComponent} from './contenedor/contenedor.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {PokemonesComponent} from './pokemones/pokemones.component';
import {EntrenadoresComponent} from './entrenadores/entrenadores.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import {TransferenciaComponent} from './transferencia/transferencia.component';
import {TseleccionComponent} from "./tseleccion/tseleccion.component";
import {TseleccionaComponent} from "./tselecciona/tselecciona.component";
import {TconfirmacionComponent} from "./tconfirmacion/tconfirmacion.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContenedorComponent,
    UsuariosComponent,
    PokemonesComponent,
    EntrenadoresComponent,
    TransferenciaComponent,
    TseleccionComponent,
    TconfirmacionComponent,
    TseleccionaComponent
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
