import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovedadesComponent } from './Modulos/novedades/novedades.component';
import {ManualUsuarioComponent } from './Modulos/manual-usuario/manual-usuario.component'
import { FooterComponent } from './Partials/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: NovedadesComponent,
  },
  {
    path: 'manualUsuario',
    component: ManualUsuarioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
