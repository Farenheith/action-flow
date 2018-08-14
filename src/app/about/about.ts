import { ThfMenuItem } from '../../models/ThfMenuItem';

export class About {
  static menu: ThfMenuItem = { label: 'Sobre este app',
        subItems: [
            { label: 'Qual o objetivo desse aplicativo?', link: '/app-goal' },
            { label: 'Como ele funciona?', link: '/app-how' },
            { label: 'Como os fluxos são cadastrados?', link: '/app-registering' },
            { label: 'O que são cenários?', link: '/app-scenarios' },
            { label: 'O que é cada tipo de ação?', link: '/types-glossary' }
        ]
    };
}
