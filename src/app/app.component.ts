import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MateriasComponent } from "./components/materias/materias.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MateriasComponent]
})
export class AppComponent {
  title = 'Valora_Agregado_Udenar';
}
