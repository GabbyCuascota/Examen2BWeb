import {Body, Controller, Get, HttpCode, Param, Post, Put, ReflectMetadata, Req, Res} from '@nestjs/common';
import {EquiposFutbolService} from './equiposFutbol.service';
import {EquiposFutbolPipe} from "../EquiposFutbolPipes/equiposFutbol.pipe";
import {UsePipes} from "@nestjs/common/utils/decorators/use-pipes.decorator";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {error} from "util";
import {EQUIPOFUTBOL_SCHEMA} from "./equiposFutbol.schema";

@Controller('equipofutbol')
export class EquiposFutbolController {
  equipos_futbol = {
    nombres: String,
    liga: String,
    fechaCreacion: Date(),
    numeroCopasInternacionales: Number,
    campeonActual: Boolean,
  };
  equipos_futbol1 = [];

  constructor(private _equiposFutbolService: EquiposFutbolService) {
  }

  @HttpCode(202)
  @Get('MostrarEquipoFutbol')
  mostrarEn(
    @Res() response
  ) {
    const equipos_futbol = this._equiposFutbolService.mostrarEn();
    //return response.send(equipos_futbol1);
  }

  @UsePipes(new EquiposFutbolPipe(EQUIPOFUTBOL_SCHEMA))
  @Post('CrearEquipoFutbol')
  crearEquipoFutbol(
    @Body(new EquiposFutbolPipe(EQUIPOFUTBOL_SCHEMA))
      nuevoEquipoFutbol
  ) {
    const EquipoFutbolCreado = this._equiposFutbolService.crearEquiposFutbol(nuevoEquipoFutbol);

    if (EquipoFutbolCreado) {
      return nuevoEquipoFutbol;
    } else {
      throw new PeticionErroneaException(
        'Petición Inválida, los datos ingresados no son suficientes',
        10,
        error
      )
    }
  }

  @Get(':id')
  obtenerUno(@Param() id, @Req() request,
             @Res() response) {
    const eqp = this._equiposFutbolService.obtenerUno(id.id);
    if (eqp) {
      return response.send(eqp);
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
  editarUno(@Param() id, @Body() updateEquiposFutbol, @Req() request,
            @Res() response) {
    const update = this._equiposFutbolService.editarUno(id.id, updateEquiposFutbol.nombre, updateEquiposFutbol.liga, updateEquiposFutbol.fechaCreacion, updateEquiposFutbol.numeroCopasInternacionales, updateEquiposFutbol.campeonActual);
    if (update) {
      return response.send(update);
    }
    else {
      throw  new PeticionNotfoundException(
        'Id No encontrado',
        10,
        error
      )
    }
  }
}
