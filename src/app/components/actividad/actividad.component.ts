import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent {
  @Input() nombre:string;
  @Input() tipo:string;
  @Input() fecha_entrega:string;
}
