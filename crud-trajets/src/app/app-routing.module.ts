
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTrajectComponent } from './edit-traject/edit-traject.component';
import { ListeTrajetsComponent } from './liste-trajets/liste-trajets.component';
import { TrajectComponent } from './traject/traject.component';

const routes: Routes = [
  {path:'', component: ListeTrajetsComponent},
  {path:'trajet/ajouter', component: TrajectComponent},
  {path:'trajet/edit/:id', component: EditTrajectComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
