import { Component, Input } from '@angular/core';
import { ActividadesComponent } from "../actividades/actividades.component";

@Component({
    selector: 'app-competencia',
    standalone: true,
    templateUrl: './competencia.component.html',
    styleUrl: './competencia.component.css',
    imports: [ActividadesComponent]
})
export class CompetenciaComponent {
  @Input() id:string;
  @Input() nombre: string;
  @Input() materia:string;
}
