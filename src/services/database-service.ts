import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Cenario } from '../models/cenario';
import { MainAction } from '../models/main-action';
import { Injectable } from '@angular/core';
import { AuthGuard } from '../app/authentication/auth-guard';
import { ItemMenu } from '../models/item-menu';

@Injectable()
export class DataBaseService {
    private cenariosNode: AngularFirestoreDocument<{}>;
    private _root: AngularFirestoreDocument<Cenario>;

    constructor(private db: AngularFirestore) {
        this.cenariosNode = db.collection('base').doc('flows')
            .collection('flanswers').doc('cenario');
    }

    private getCenario() {
        return this._root ? this._root : (this._root = this.cenariosNode.collection(AuthGuard.getCenarioId()).doc('ref'));
    }

    public subscribeCenarios(observer: (x: Array<ItemMenu>) => void) {
        return this.cenariosNode.valueChanges().subscribe(
                (x: {list: Array<ItemMenu>}) => {

                observer(x.list);
            });
    }

    subscribeInitialActions(observer: (x: Cenario) => void) {
        AuthGuard.OnCenarioChange(() => {
            this.getCenario().valueChanges().subscribe(observer);
        });
    }

    subscribeCenario(observer: (cenario: Cenario) => void) {
        AuthGuard.OnCenarioChange(() => {
            this.getCenario().valueChanges().subscribe(x => {
                observer(x);
            });
        });
    }

    subscribeAction(action: string, observer: (x: MainAction) => void) {
        const db = this.getCenario().collection('action').doc(action);
        db.valueChanges().subscribe((y: MainAction) => {
                y.getSubAction = (subAction, obs) => {
                    db.collection('history').doc(subAction)
                        .valueChanges().subscribe(obs);
                };

                observer(y);
            });
    }
}
