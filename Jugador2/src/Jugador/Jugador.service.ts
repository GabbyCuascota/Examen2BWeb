import {Injectable} from '@nestjs/common';

@Injectable()
export class JugadorService {
  Juga: Jugadores [] = [];

  crear_juga(App: Jugadores): Jugadores {
    this.Juga.push(App);
    return App
  }

  mostrar_juga(): Jugadores [] {
    return this.Juga;
  }

  obtenerUno(id) {
    return this.Juga[id - 1];
  }

  editarUno(id, numeroCamiseta, nombreCamiseta, nombreCompletoJugador, poderEspecialDos, fechaIngresoEquipo, goles, equipoFutbolId) {
    let arregloAux = this.obtenerUno(id);
    arregloAux.numeroCamiseta = numeroCamiseta;
    arregloAux.nombreCamiseta = nombreCamiseta;
    arregloAux.nombreCompletoJugador = nombreCompletoJugador;
    arregloAux.poderEspecialDos = poderEspecialDos;
    arregloAux.fechaIngresoEquipo = fechaIngresoEquipo;
    arregloAux.goles = goles;
    arregloAux.equipoFutbolId = equipoFutbolId;
    return arregloAux;
  };
}

export interface Jugadores {
  numeroCamiseta: number,
  nombreCamiseta: string,
  nombreCompletoJugador: string,
  poderEspecialDos: string,
  fechaIngresoEquipo: Date,
  goles: number,
  equipoFutbolId: number,
}
