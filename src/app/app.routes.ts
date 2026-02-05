import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ElementosSitioComponent } from './pages/elementos-sitio/elementos-sitio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BreadcrumbComponent } from './pages/shared/breadcrumb/breadcrumb.component';
import { MapaSitioComponent } from './pages/mapa-sitio/mapa-sitio.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Busqueda } from './pages/busqueda/busqueda.component';
import { Breadcrumb } from './pages/breadcrumbs/breadcrumbs.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'elementos',
    component: ElementosSitioComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'breadcrumbs',
    component: Breadcrumb
  },
  {
    path: 'mapa-sitio',
    component: MapaSitioComponent
  },
  {
    path: 'busqueda',
    component: Busqueda
  },
  {
    path: '**',
    component: Error404Component
  }
]