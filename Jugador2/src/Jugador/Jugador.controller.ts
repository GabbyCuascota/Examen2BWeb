import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {JugadorService} from "./jugador.service";
import {JugadorPipe} from "../Jugador/jugador.pipe";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error} from "util";
import {JUGADOR_SCHEMA} from "./Jugador.schema";

@Controller('Jugador')
export class JugadorController {
  jugador = {
    numeroCamiseta: Number,
    nombreCamiseta: String,
    nombreCompletoJugador: String,
    poderEspecialDos: String,
    fechaIngresoEquipo: Date,
    goles: Number,
    equipoFutbolId: Number,
  };

  jugador1 = [];

  constructor(private _jugadorservice: JugadorService) {
  }

  @Get('MostrarJugadores') mostrarAplicacion(@Res() response) {
    const app = this._jugadorservice.mostrar_juga();
    return response.send(app);
  }

  @UsePipes(new JugadorPipe(JUGADOR_SCHEMA))
  @Post('crearJugador')
  crearAPP(@Body(new JugadorPipe(JUGADOR_SCHEMA))
             nuevojug) {
    const jugaNuevo = this._jugadorservice.crear_juga(nuevojug)

    if (jugaNuevo) {

      return nuevojug;

    } else {
      throw new PeticionErroneaException(
        'Los datos ingresados no son suficientes',
        10,
        error
      )
    }
  }

  @Get(':id')
  obtenerUno(@Param() id, @Req() request,
             @Res() response) {
    const jug = this._jugadorservice.obtenerUno(id.id);
    if (jug) {
      return response.send(jug);
    }
    else {
      throw  new PeticionNotfoundException(
        'Id No encontrado',
        10,
        error
      )
    }
  }

  @Put(':id')
  editarUno(@Param() id, @Body() updateJugador, @Req() request,
            @Res() response) {
    const update = this._jugadorservice.editarUno(id.id, updateJugador.numeroCamiseta, updateJugador.nombreCamiseta, updateJugador.nombreCompletoJugador,
      updateJugador.poderEspecialDos, updateJugador.fechaIngresoEquipo, updateJugador.goles, updateJugador.equipoFutbolId);
    if (update) {
      return response.send(update);
    } else {
      throw  new PeticionNotfoundException(
        'Id No encontrado',
        10,
        error
      )
    }
  }
}
