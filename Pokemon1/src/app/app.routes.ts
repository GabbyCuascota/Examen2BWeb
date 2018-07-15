import {Routes} from "@angular/router";
import {ContenedorComponent} from "./contenedor/contenedor.component";
import {LoginComponent} from "./Login/login.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";
import {TseleccionComponent} from "./tseleccion/tseleccion.component";
import {TseleccionaComponent} from "./tselecciona/tselecciona.component";
import {TconfirmacionComponent} from "./tconfirmacion/tconfirmacion.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: ContenedorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'transferencia',
    component: TransferenciaComponent,
  },
  {
    path: 'transferenciaselec',
    component: TseleccionComponent,
  },
  {
    path: 'transferenciaseleca',
    component: TseleccionaComponent,
  },
  {
    path: 'transferenciaconf',
    component: TconfirmacionComponent,
  }
]
