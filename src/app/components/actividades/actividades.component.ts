import { Component, Input, OnInit } from '@angular/core';
import { MateriaServiceProvider } from '../../services/materia.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Actividad } from '../../clases/actividad.model';
import { ActividadComponent } from "../actividad/actividad.component";

@Component({
    selector: 'app-actividades',
    standalone: true,
    templateUrl: './actividades.component.html',
    styleUrl: './actividades.component.css',
    imports: [FormsModule, ActividadComponent]
})

export class ActividadesComponent implements OnInit{

  nombre:string;
  tipo:string;
  fecha_entrega:string;

  @Input() id_materia:string;
  @Input() id_competencia:string;

  actividades: Actividad[] = [];

  constructor(private materiaService:MateriaServiceProvider){}

  ngOnInit(): void {
    this.actualizarActividades();

    this.materiaService.competenciaActualizada.subscribe(()=>{
      this.actualizarActividades();
    });
  }

  private actualizarActividades(){
    this.actividades = this.materiaService.obtenerActividades(this.id_materia, this.id_competencia);
  }

  agregarItem(){
    const reg = /^[A-Za-z0-9\s\t]+$/
    if(reg.test(this.nombre) && reg.test(this.tipo) && reg.test(this.fecha_entrega)){
      let id = 1;
      if(this.actividades.length > 1){
        id = parseInt(this.actividades[this.actividades.length-1].id)+1;
      }
      this.materiaService.agregarActidad(this.id_materia, this.id_competencia, new Actividad(id.toString(), this.tipo ,this.nombre, this.fecha_entrega));
      this.nombre = "";
      this.tipo = "";
      this.fecha_entrega = "";
    }
  }

}
