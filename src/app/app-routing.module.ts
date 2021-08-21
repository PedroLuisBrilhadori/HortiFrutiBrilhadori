import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { FotosComponent } from './componentes/fotos/fotos.component';

const routes: Routes = [
  {path: '', redirectTo: 'folheto', pathMatch: 'full'},
  {path: 'folheto', component: FotosComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }