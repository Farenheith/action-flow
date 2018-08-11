import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/database-service';
import { AuthGuard } from './authentication/auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataBaseService, AuthGuard]
})
export class AppComponent {
  title = 'ACTION FLOW';
  menus = new Array<{ label: string, action: () => void }>();

  constructor(private router: Router, private db: DataBaseService) {
    db.subscribeInitialActions(x => {
      this.title = x.title;
      this.menus.length = 0;
      x.initialActions.forEach(y => {
        this.menus.push({
          label: y.title,
          action: () => { this.callActions(y.id); }
        });
      });
    });
  }

  callActions(doc: string) {
    this.router.navigate(['/actions'], {
      queryParams: {
        id: doc
      }
    });
 }

}
