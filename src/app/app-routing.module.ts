import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'mapa',
    loadChildren: () => import('./mapas/mapas.module').then(m=>m.MapasModule)
  },
  {
    path: '**',
    redirectTo: 'mapa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
