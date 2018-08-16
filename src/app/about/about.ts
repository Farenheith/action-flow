import { ThfMenuItem } from '../../models/ThfMenuItem';
import { Routes } from '@angular/router';
import { AppGoalComponent } from './app-goal/app-goal.component';
import { AppHowComponent } from './app-how/app-how.component';
import { AppRegisteringComponent } from './app-registering/app-registering.component';
import { AppScenariosComponent } from './app-scenarios/app-scenarios.component';

export class About {
  static menu: ThfMenuItem = { label: 'Sobre este app',
        subItems: [
            { label: 'Qual o objetivo desse aplicativo?', link: '/app-goal' },
            { label: 'Como ele funciona?', link: '/app-how' },
            { label: 'Como os fluxos são cadastrados?', link: '/app-registering' },
            { label: 'O que são cenários?', link: '/app-scenarios' }
        ]
    };

    static AddRoutes(routes: Routes): any {
        routes.push({ path: 'app-goal', component: AppGoalComponent },
            { path: 'app-how', component: AppHowComponent },
            { path: 'app-registering', component: AppRegisteringComponent },
            { path: 'app-scenarios', component: AppScenariosComponent });
    }
}
