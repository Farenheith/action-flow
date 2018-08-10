import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionNavigationComponent } from './action-navigation/action-navigation.component';

const routes: Routes = [
  { path: 'actions', component: ActionNavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }