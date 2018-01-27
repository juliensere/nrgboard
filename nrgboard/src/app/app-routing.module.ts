import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SaisieElecComponent} from './saisie-elec/saisie-elec.component';
import {SaisieEauComponent} from './saisie-eau/saisie-eau.component';
import {HistoGazComponent} from './histo-gaz/histo-gaz.component';
import {SaisieGazComponent} from './saisie-gaz/saisie-gaz.component';
import {ProfilComponent} from './profil/profil.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'saisie/gaz', component: SaisieGazComponent},
  {path: 'saisie/electricite', component: SaisieElecComponent},
  {path: 'saisie/eau', component: SaisieEauComponent},
  {path: 'historique/gaz', component: HistoGazComponent},
  {path: 'profil', component: ProfilComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


