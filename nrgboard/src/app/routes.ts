import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {HistoGazComponent} from './histo-gaz/histo-gaz.component';
import {SaisieEauComponent} from './saisie-eau/saisie-eau.component';
import {SaisieElecComponent} from './saisie-elec/saisie-elec.component';
import {SaisieGazComponent} from './saisie-gaz/saisie-gaz.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'saisie/gaz', component: SaisieGazComponent},
  {path: 'saisie/electricite', component: SaisieElecComponent},
  {path: 'saisie/eau', component: SaisieEauComponent},
  {path: 'histo/gaz', component: HistoGazComponent},
  {path: '**', redirectTo: ''},
];
