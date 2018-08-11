import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/database-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataBaseService]
})
export class AppComponent {
  title = 'ACTION FLOW';
  menus = [
    { label: 'Teste', action: this.callActions },
  ];

  constructor(private router: Router, private db: DataBaseService) {
    db.getInitialActions(x => {
      this.title = x.title;
      while (this.menus.length > 0) {
        this.menus.pop();
      }
      x.initialActions.forEach(y => {
        this.menus.push({
          label: y.title,
          action: () => { this.callActions(y.action); }
        });
      });
    })
  }

  callActions(doc: string){
    this.router.navigate(['/actions'], {
      queryParams: {
        id: doc
      }
    })
 }

}
