import { Actividad } from "./actividad.model";
export class Competencia {
  constructor(public id:string, public nombre:string, public actividades:Actividad[]){}
}
