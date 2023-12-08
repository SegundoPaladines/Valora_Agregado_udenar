import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})
export class MateriaComponent {

  @Input() id:string;
  @Input() nombre: string;
  @Input() carrera?: string;
  @Input() numEstudiantes?: string;
  @Input() intensidadHoraria?: string;
  @Input() horario?: string;
  @Input() aula?: string;
  @Input() tipo?: string;
}
