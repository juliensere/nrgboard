import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectionEnergieComponent } from './selection-energie/selection-energie.component';
import { SaisieGazComponent } from './saisie-gaz/saisie-gaz.component';
import { SaisieElecComponent } from './saisie-elec/saisie-elec.component';
import { SaisieEauComponent } from './saisie-eau/saisie-eau.component';
import { HistoEauComponent } from './histo-eau/histo-eau.component';
import { HistoGazComponent } from './histo-gaz/histo-gaz.component';
import { HistoElecComponent } from './histo-elec/histo-elec.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionEnergieComponent,
    SaisieGazComponent,
    SaisieElecComponent,
    SaisieEauComponent,
    HistoEauComponent,
    HistoGazComponent,
    HistoElecComponent,
    ExportComponent,
    ImportComponent,
    HeaderComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

