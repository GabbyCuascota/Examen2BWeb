import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {JugadorController} from "../Jugador/Jugador.controller";
import {AutorizacionController} from "../autorizacion/autorizacion.controller";
import {EquiposFutbolController} from "../EquiposFutbol/equiposFutbol.controller";

@Module({
  imports: [],
  controllers: [AppController, EquiposFutbolController, JugadorController, AutorizacionController],
  providers: [AppService, EquiposFutbolController, JugadorController],
})
export class AppModule {
}
