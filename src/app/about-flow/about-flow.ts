import { ThfMenuItem } from '../../models/ThfMenuItem';
import { Routes } from '@angular/router';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';
import { FlanswersGlossaryComponent } from './flanswers-glossary/flanswers-glossary.component';

export class AboutFlow {
    static menu: ThfMenuItem = {
        label: 'Sobre FLOW',
        subItems: [
            { label: 'O que é cada tipo de ação?', link: '/types-glossary' },
            { label: 'Termos usados no FL ANSWERS', link: '/flanswers-glossary' }
        ]
    };

    static AddRoutes(routes: Routes) {
        routes.push(
            { path: 'types-glossary', component: TypesGlossaryComponent },
            { path: 'flanswers-glossary', component: FlanswersGlossaryComponent }
        );
    }
}
