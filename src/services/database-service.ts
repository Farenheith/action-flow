import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Cenario } from '../models/cenario';
import { MainAction } from '../models/main-action';
import { Injectable } from '@angular/core';
import { AuthGuard } from '../app/authentication/auth-guard';
import { ItemMenu } from '../models/item-menu';
import { FlowActionType } from '../models/flow-action-type';
import { environment } from '../environments/environment';

@Injectable()
export class DataBaseService {
    private application: AngularFirestoreCollection;
    private cenariosNode: AngularFirestoreDocument<{}>;
    private _root: AngularFirestoreDocument<Cenario>;

    constructor(private db: AngularFirestore) {
        this.application = db.collection(environment.defaultApplication);
        this.cenariosNode = this.application.doc('cenario');
    }

    subscribeTypes(observer: (x: Array<FlowActionType>) => void): any {
        const config = this.application.doc('config');
        const collection = config.collection('type');
        collection.valueChanges().subscribe(observer);
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
