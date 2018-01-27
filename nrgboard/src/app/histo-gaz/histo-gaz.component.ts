import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Mesure} from '../models/mesure.model';

@Component({
  selector: 'app-histo-gaz',
  templateUrl: './histo-gaz.component.html',
  styleUrls: ['./histo-gaz.component.css']
})
export class HistoGazComponent implements OnInit {

  private mesuresCollection: AngularFirestoreCollection<Mesure>;
  mesures: Observable<Mesure[]>;

  constructor(private afs: AngularFirestore) {
    this.mesuresCollection = afs.collection<Mesure>('mesures');
    this.mesures = this.mesuresCollection.valueChanges();
  }

  addMesure(item: Mesure) {
    this.mesuresCollection.add(item);
  }

  ngOnInit() {
  }

}
