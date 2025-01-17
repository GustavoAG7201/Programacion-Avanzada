import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './content/inicio/inicio.component';
import { PortafolioComponent } from './content/portafolio/portafolio.component';


const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
