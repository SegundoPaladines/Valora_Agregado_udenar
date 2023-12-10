import { Competencia } from "./competencia.model";

export class Materia{
  constructor(public id:string, public nombre:string, public carrera:string, public num_est:number, public int_horaria:string, public horario:string, public aula:string, public tipo:string, public competencias: Competencia[]){}
}
