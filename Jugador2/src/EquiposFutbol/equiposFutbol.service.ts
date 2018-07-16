import {Injectable} from '@nestjs/common';

@Injectable()
export class EquiposFutbolService {
  Equipos_fu1: EquiposFutbol1[] = [];

  crearEquiposFutbol(Equipos_fu: EquiposFutbol1): EquiposFutbol1 {
    this.Equipos_fu1.push(Equipos_fu);
    return Equipos_fu;
  }

  mostrarEn(): EquiposFutbol1[] {
    return this.Equipos_fu1;
  }

  obtenerUno(id) {
    return this.Equipos_fu1[id - 1];
  }

  editarUno(id, nombre, liga, fechaCreacion, numeroCopasInternacionales, campeonActual) {
    let arregloAux = this.obtenerUno(id);
    arregloAux.nombre = nombre;
    arregloAux.liga = liga;
    arregloAux.fechaCreacion = fechaCreacion;
    arregloAux.numeroCopasInternacionales = numeroCopasInternacionales;
    arregloAux.campeonActual = campeonActual;
    return arregloAux;
  };
}

export class EquiposFutbol1 {
  constructor(
    public nombre: string,
    public liga: string,
    public fechaCreacion: Date,
    public numeroCopasInternacionales: number,
    public campeonActual: boolean,
  ) {
  }

}
