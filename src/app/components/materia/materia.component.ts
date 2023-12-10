import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciasComponent } from "../competencias/competencias.component";

@Component({
    selector: 'app-materia',
    standalone: true,
    templateUrl: './materia.component.html',
    styleUrl: './materia.component.css',
    imports: [CommonModule, CompetenciasComponent]
})
export class MateriaComponent {

  @Input() id:string;
  @Input() nombre: string;
  @Input() carrera?: string;
  @Input() numEstudiantes?: number;
  @Input() intensidadHoraria?: string;
  @Input() horario?: string;
  @Input() aula?: string;
  @Input() tipo?: string;
}
