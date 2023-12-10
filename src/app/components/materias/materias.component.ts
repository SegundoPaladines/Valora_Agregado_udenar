import { Component, OnInit } from '@angular/core';
import { MateriaComponent } from '../materia/materia.component';
import { Materia } from '../../clases/materia.model';
import { MateriaServiceProvider } from '../../services/materia.service';

@Component({
    selector: 'app-materias',
    standalone: true,
    templateUrl: './materias.component.html',
    styleUrl: './materias.component.css',
    imports: [MateriaComponent],
    providers: [MateriaServiceProvider]
})

export class MateriasComponent implements OnInit{
  name: String = "Plan Curricular Ingenieria de Sistemas";
  
  constructor(private materiaService:MateriaServiceProvider){}

  materias: Materia[] = this.materiaService.obtenerMaterias();

  ngOnInit(): void {
    this.materiaService.materiasActualizadas.subscribe((materias:Materia[])=>{
      this.materias = materias;
    });
  }
}
