import { Component } from '@angular/core';
import { MateriaComponent } from '../materia/materia.component';

@Component({
    selector: 'app-materias',
    standalone: true,
    templateUrl: './materias.component.html',
    styleUrl: './materias.component.css',
    imports: [MateriaComponent]
})
export class MateriasComponent {
  name: String = "Plan Curricular Ingenieria de Sistemas";
  materias = [
    {id:"1", nombre:"Ingeniería de Software", carrera:"Ingeniería de Sistemas", num_est:"30", int_horaria:"4h/semana", horario:"lunes 11:00a.m. - 1:00 p.m. Martes 11:00a.m. - 1:00 p.m.", aula:"Bloque 206 A-208", tipo:"Teórica"},
    {id:"2", nombre:"Programación II", carrera:"Ingeniería de Sistemas", num_est:"25", int_horaria:"4h/semana", horario:"Miercoles 11:00a.m. - 1:00 p.m. Jueves 11:00a.m. - 1:00 p.m.", aula:"Bloque T A-410", tipo:"Práctica"},
    {id:"3", nombre:"Sistemas Inteligentes", carrera:"Ingeniería de Sistemas", num_est:"40", int_horaria:"4h/semana", horario:"Martes 7:00a.m. - 9:00 a.m. Jueves 9:00a.m. - 11:00 a.m.", aula:"Bloque T A-406", tipo:"Teórica"},
    {id:"4", nombre:"Estructuras de Datos", carrera:"Ingeniería de Sistemas", num_est:"35", int_horaria:"4h/semana", horario:"Miercoles 7:00a.m. - 9:00 a.m. Viernes 11:00a.m. - 1:00 p.m.", aula:"Bloque T A-408", tipo:"Práctica"}
  ]
}
