import { NgModule } from '@angular/core';
import { AppGoalComponent } from './app-goal/app-goal.component';
import { AppHowComponent } from './app-how/app-how.component';
import { AppRegisteringComponent } from './app-registering/app-registering.component';
import { AppScenariosComponent } from './app-scenarios/app-scenarios.component';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppGoalComponent,
    AppHowComponent,
    AppRegisteringComponent,
    AppScenariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ThfModule
  ],
  providers: [],
  bootstrap: []
})
export class AboutModule { }
