import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenMapaComponent } from './pages/full-screen-mapa/full-screen-mapa.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarcadoresMapaComponent } from './pages/marcadores-mapa/marcadores-mapa.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'full-screen',
        component: FullScreenMapaComponent
      },
      {
        path: 'zoom-range',
        component: ZoomRangeComponent
      },
      {
        path: 'marcadores',
        component: MarcadoresMapaComponent
      },
      {
        path: 'propiedades',
        component: PropiedadesComponent
      },
      {
        path: '**',
        redirectTo: 'full-screen'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
