import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionNavigationComponent } from './action-navigation/action-navigation.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AuthGuard } from './authentication/auth-guard';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';

const routes: Routes = [
  { path: '', component: DefaultPageComponent},
  { path: 'actions', component: ActionNavigationComponent, canActivate: [AuthGuard] },
  { path: 'types-glossary', component: TypesGlossaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
