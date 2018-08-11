import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Cenario } from '../models/cenario';
import { MainAction } from '../models/main-action';
import { Injectable } from '@angular/core';

@Injectable()
export class DataBaseService {
    private root: AngularFirestoreDocument<Cenario>;

    constructor(private db: AngularFirestore) {
        this.root = db.collection('base').doc('flows').collection('flanswers')
        .doc('cenario').collection('braCaseWorker').doc('ref');
    }

    getInitialActions(observer: (x: Cenario) => void) {
        this.root.valueChanges().subscribe(observer);
    }

    getAction(action: string, observer: (x: MainAction) => void) {
        const db = this.root.collection('action').doc(action);
        db.valueChanges().subscribe((y: MainAction) => {
                y.getSubAction = (subAction, obs) => {
                    db.collection('history').doc(subAction)
                        .valueChanges().subscribe(obs);
                };

                observer(y);
            });
    }
}
