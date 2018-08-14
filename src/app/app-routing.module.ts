import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionNavigationComponent } from './action-navigation/action-navigation.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';
import { AuthGuard } from '../authentication/auth-guard';
import { AppGoalComponent } from './about/app-goal/app-goal.component';
import { AppHowComponent } from './about/app-how/app-how.component';
import { AppRegisteringComponent } from './about/app-registering/app-registering.component';
import { AppScenariosComponent } from './about/app-scenarios/app-scenarios.component';

const routes: Routes = [
  { path: '', component: DefaultPageComponent},
  { path: 'actions', component: ActionNavigationComponent, canActivate: [AuthGuard] },
  { path: 'app-goal', component: AppGoalComponent },
  { path: 'app-how', component: AppHowComponent },
  { path: 'app-registering', component: AppRegisteringComponent },
  { path: 'app-scenarios', component: AppScenariosComponent },
  { path: 'types-glossary', component: TypesGlossaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
