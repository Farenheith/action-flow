import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/database-service';
import { AuthGuard } from '../authentication/auth-guard';
import { ThfMenuItem } from '../models/ThfMenuItem';
import { About } from './about/about';
import { AboutFlow } from './about-flow/about-flow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataBaseService, AuthGuard]
})
export class AppComponent {
  title = 'ACTION FLOW';
  flowMenus = Array<ThfMenuItem>();
  menus: Array<ThfMenuItem> = [
    About.menu,
    AboutFlow.menu,
    { label: 'Simular fluxo', subItems: this.flowMenus}
  ];

  constructor(private router: Router, private db: DataBaseService) {
    db.subscribeInitialActions(x => {
      this.title = x.title;
      this.flowMenus.length = 0;
      x.initialActions.forEach(y => {
        this.menus.push({
          label: y.title,
          action: () => { this.callActions(y.id); }
        });
      });
    });
  }

  private callActions(doc: string) {
    this.router.navigate(['/actions'], {
      queryParams: {
        id: doc
      }
    });
 }

}
