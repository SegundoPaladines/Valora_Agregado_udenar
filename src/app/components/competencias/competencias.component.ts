import { Component, Input, OnInit } from '@angular/core';
import { Competencia } from '../../clases/competencia.model';
import { MateriaServiceProvider } from '../../services/materia.service';
import { CompetenciaComponent } from "../competencia/competencia.component";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-competencias',
    standalone: true,
    templateUrl: './competencias.component.html',
    styleUrl: './competencias.component.css',
    imports: [CompetenciaComponent, FormsModule]
})
export class CompetenciasComponent implements OnInit{

  nombre:string;

  @Input() id_materia:string;

  constructor(private materiaService:MateriaServiceProvider){}

  competencias:Competencia[] = [];

  ngOnInit(): void {
    this.actualizarCompetencias();

    this.materiaService.materiasActualizadas.subscribe(() => {
      this.actualizarCompetencias();
    });
  }

  private actualizarCompetencias() {
    this.competencias = this.materiaService.obtenerCompetencias(this.id_materia);
  }

  agregarItem(){
    const reg = /^[A-Za-z0-9\s\t\-_]+$/;
    if(this.nombre != undefined && this.nombre != null && reg.test(this.nombre)){
      let id = 1;
      if(this.competencias.length > 0){
        id = parseInt(this.competencias[this.competencias.length-1].id)+1;
        console.log(id);
      }
      this.materiaService.agregarCompetencia(this.id_materia, new Competencia(id.toString(),this.nombre,[]));
      this.nombre = "";
    }
  }

}
