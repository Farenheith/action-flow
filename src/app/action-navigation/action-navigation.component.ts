import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { AngularFirestore, DocumentReference, DocumentSnapshot } from '../../../node_modules/angularfire2/firestore';
import { FlaNextActions } from '../../models/fla-next-actions';
import { FlaAction } from '../../models/fla-action';
import { FlaHistory } from '../../models/fla-history';

@Component({
  selector: 'app-action-navigation',
  templateUrl: './action-navigation.component.html',
  styleUrls: ['./action-navigation.component.css']
})
export class ActionNavigationComponent implements OnInit {

  description: string;
  next: Array<FlaNextActions> = [];
  history: Array<FlaHistory> = [];
  reference: { [id: string]: DocumentReference };
  selectedAction: string;

  constructor(private router: Router, private db: AngularFirestore, private route: ActivatedRoute)
  {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      while (this.history.length > 0) {
        this.history.pop();
      }
      this.selectedAction = null;
      const doc = this.db.collection("initial").doc(queryParams.id);
      doc.valueChanges().subscribe((x: any) => {
        this.history.push({
          value: this.getName(x)
        });
        this.description = x.description;
        this.fillNextActions(x);
      });
    }
    );
  }

  private fillNextActions(x: any) {
    this.selectedAction = null;
    while (this.next.length > 0) {
      this.next.pop();
    }
    this.reference = {};
    x.next.forEach((y: DocumentReference) => {
      y.get().then((z: DocumentSnapshot<FlaAction>) => {
        const data = z.data();
        const title = this.getTitle(data);
        this.reference[title] = y;
        this.next.push({
          label: title,
          value: title,
          description: data.description
        });
      });
    });
  }

  private getTitle(data: FlaAction) {
    return '[' + data.type.id + '] ' + data.title;
  }

  private getName(data: FlaAction) {
    return '[' + data.type.id + '] ' + data.name;
  }

  onSelectAction() {
    if (!this.selectedAction) {
      alert('Nenhuma ação selecionada!');
    } else {
      this.next.forEach(x => {
        if (x.value === this.selectedAction){
          this.description = x.description;
        }
      });
      this.reference[this.selectedAction].get().then((x: DocumentSnapshot<FlaAction>) => {
        const data = x.data();
        this.history.push({
          value: this.getName(data)
        });
        this.fillNextActions(data);
      });
    }
  }

  onChangeAction(newValue: string) {
    if (!newValue) {
      this.description = null;
    } else {
      this.next.forEach(x => {
        if (x.value === newValue) {
          this.description = x.description;
        }
      });
    }
  }

}
