// Importamos 'Component' para definir este archivo como un componente.
import { Component } from '@angular/core';
// Importamos 'RouterModule' porque vamos a usar enlaces 
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from "../pages/shared/breadcrumb/breadcrumb.component";

@Component({
  // El nombre de la etiqueta para usar este layout.
  selector: 'app-layout',
  // standalone: true significa que este componente se manda solo, no necesita un módulo padre.
  // Analogía: Es un trabajador autónomo, trae sus propias herramientas.
  standalone: true,
  // Necesitamos importar RouterModule aquí para que funcionen los enlaces en el HTML del layout.
  imports: [RouterModule, BreadcrumbComponent, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class Layout {
  quickQuery = '';

  constructor(private router: Router) {}

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}