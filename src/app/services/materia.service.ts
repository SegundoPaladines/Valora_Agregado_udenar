import { EventEmitter } from "@angular/core";
import { Materia } from "../clases/materia.model";
import { Competencia } from '../clases/competencia.model';
import { Actividad } from "../clases/actividad.model";

export class MateriaServiceProvider{
  materias: Materia[] = [
    {
      id: "1",
      nombre: "Ingeniería de Software",
      carrera: "Ingeniería de Sistemas",
      num_est: 30,
      int_horaria: "4h/semana",
      horario: "lunes 11:00a.m. - 1:00 p.m. Martes 11:00a.m. - 1:00 p.m.",
      aula: "Bloque 206 A-208",
      tipo: "Teórica",
      competencias: [
        {id:"1", nombre:"Razonamiento Cuantitativo", actividades:[
          {id:"1", tipo:"taller", nombre:"Taller 1", fecha_entrega:"1-enero-2024"},
          {id:"2", tipo:"taller", nombre:"Taller 2", fecha_entrega:"10-enero-2024"}
        ]}
      ]
    },
    {
      id: "2",
      nombre: "Programación II",
      carrera: "Ingeniería de Sistemas",
      num_est: 25,
      int_horaria: "4h/semana",
      horario: "Miércoles 11:00a.m. - 1:00 p.m. Jueves 11:00a.m. - 1:00 p.m.",
      aula: "Bloque T A-410",
      tipo: "Práctica",
      competencias: [
        {id:"1", nombre:"Pensamiento Crítico", actividades:[]}
      ],
    },
    {
      id: "3",
      nombre: "Sistemas Inteligentes",
      carrera: "Ingeniería de Sistemas",
      num_est: 40,
      int_horaria: "4h/semana",
      horario: "Martes 7:00a.m. - 9:00 a.m. Jueves 9:00a.m. - 11:00 a.m.",
      aula: "Bloque T A-406",
      tipo: "Teórica",
      competencias: [],
    },
    {
      id: "4",
      nombre: "Estructuras de Datos",
      carrera: "Ingeniería de Sistemas",
      num_est: 35,
      int_horaria: "4h/semana",
      horario: "Miércoles 7:00a.m. - 9:00 a.m. Viernes 11:00a.m. - 1:00 p.m.",
      aula: "Bloque T A-408",
      tipo: "Práctica",
      competencias: [],
    },
  ];

  //evento para emitir cambios en las materias
  materiasActualizadas = new EventEmitter<Materia[]>();

  //cuando una materia es actualizada
  materiaActualizada = new EventEmitter<Materia>();

  competenciaActualizada = new EventEmitter<Competencia>();

  agregarMateria(materia: Materia){
    this.materias.push(materia);
    this.materiasActualizadas.emit(this.materias.slice());
  }

  obtenerMaterias(){
    return this.materias.slice();
  }

  obtenerCompetencias(id:string) {
    for (const mat of this.materias) {
      if (mat.id === id) {
        return mat.competencias;
      }
    }
    return [];
  }

  agregarCompetencia(id:string, competencia:Competencia){
    for (const mat of this.materias) {
      if (mat.id === id) {
        mat.competencias.push(competencia);
        this.materiaActualizada.emit(mat);
        return;
      }
    }
  }

  agregarActidad(id_materia: string, id_competencia: string, actividad: Actividad) {
    const materia = this.materias.find((mat) => mat.id === id_materia);
    if (materia) {
      const competencia = materia.competencias.find((comp) => comp.id === id_competencia);
      if (competencia) {
        competencia.actividades.push(actividad);
        this.competenciaActualizada.emit(competencia);
        return;
      }
    }
  }

  obtenerActividades(id_materia: string, id_competencia: string) {
    const materia = this.materias.find((mat) => mat.id === id_materia);
    if (materia) {
      const competencia = materia.competencias.find((comp) => comp.id === id_competencia);
      if (competencia) {
        return competencia.actividades;
      }
    }
    return [];
  }
}
