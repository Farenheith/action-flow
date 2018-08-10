import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menus = [
    { label: 'Teste', action: this.callActions },
  ];

  constructor(private router: Router, private db: AngularFirestore) {
    db.collection("initial").doc("summary").valueChanges().subscribe((x: any) => {
      while (this.menus.length > 0) {
        this.menus.pop();
      }
      x.options.forEach(y => {
        this.menus.push({
          label: y.title,
          action: () => { this.callActions(y.document.id); }
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
