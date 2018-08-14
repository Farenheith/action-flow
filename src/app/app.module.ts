import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThfModule } from '@totvs/thf-ui';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ActionNavigationComponent } from './action-navigation/action-navigation.component';
import { environment } from '../environments/environment';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AboutModule } from './about/about.module';
import { AboutFlowModule } from './about-flow/about-flow.module';


@NgModule({
  declarations: [
    AppComponent,
    ActionNavigationComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    ThfModule,
    FormsModule,
    AboutModule,
    AboutFlowModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
