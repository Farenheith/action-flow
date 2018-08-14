import { ThfMenuItem } from '../../models/ThfMenuItem';
import { Routes } from '@angular/router';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';

export class AboutFlow {
    static menu: ThfMenuItem = {
        label: 'Sobre FLOW',
        subItems: [
            { label: 'O que é cada tipo de ação?', link: '/types-glossary' }
        ]
    };

    static AddRoutes(routes: Routes): any {
        routes.push({ path: 'types-glossary', component: TypesGlossaryComponent });
    }
}
