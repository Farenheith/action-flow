import { ThfMenuItem } from '../../models/ThfMenuItem';
import { Routes } from '@angular/router';
// Os imports abaixo precisam ser colocados também no app-routing.module para não dar erro na compilação otimizada
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';
import { FlanswersGlossaryComponent } from './flanswers-glossary/flanswers-glossary.component';
import { FlanswersAccessComponent } from './flanswers-access/flanswers-access.component';
import { FlanswersWhichUserComponent } from './flanswers-which-user/flanswers-which-user.component';
import { FlanswersForgotPasswordComponent } from './flanswers-forgot-password/flanswers-forgot-password.component';
import { FlanswersForgotUserComponent } from './flanswers-forgot-user/flanswers-forgot-user.component';
import { FlanswersEmailPasswordComponent } from './flanswers-email-password/flanswers-email-password.component';
import { FlanswersNewCaseComponent } from './cases/flanswers-new-case/flanswers-new-case.component';
import { FlanswersCheckingBeneficiaryComponent } from './cases/flanswers-checking-beneficiary/flanswers-checking-beneficiary.component';
import { FlanswersBeneficiaryTypeComponent } from './cases/flanswers-beneficiary-type/flanswers-beneficiary-type.component';
import { FlanswersBeneficiaryIncludingComponent } from './cases/flanswers-beneficiary-including/flanswers-beneficiary-including.component';
import { FlanswersAccompanyingRelativeComponent } from './cases/flanswers-accompanying-relative/flanswers-accompanying-relative.component';
import { FlanswersRelativeEnquirerComponent } from './cases/flanswers-relative-enquirer/flanswers-relative-enquirer.component';
// tslint:disable-next-line:max-line-length
import { FlanswersEnquirerToBeneficiaryComponent } from './cases/flanswers-enquirer-to-beneficiary/flanswers-enquirer-to-beneficiary.component';

export class AboutFlow {
    static menu: ThfMenuItem = {
        label: 'Sobre FL ANSWERS',
        subItems: [
            { label: 'O que é cada tipo de ação?', link: '/types-glossary' },
            { label: 'Termos utlizados', link: '/flanswers-glossario' },
            { label: 'Como acessar?', link: '/flanswers-como-acessar' },
            { label: 'Qual usuário utilizar?', link: '/flanswers-qual-usuario' },
            { label: 'Esqueci a senha!', link: '/flanswers-esqueci-senha' },
            { label: 'Esqueci o usuário!', link: '/flanswers-esqueci-usuario' },
            { label: 'Esqueci a senha do e-mail institucional!', link: '/flanswers-esqueci-senha-email' },
            { label: 'Sobre novos casos', subItems: [
                { label: 'Como incluir um novo caso?', link: '/flanswers-casos' },
                { label: 'Como saber se beneficiário já está cadastrado?', link: '/flanswers-checando-beneficiario' },
                { label: 'Qual pessoa devo incluir como beneficiário no primeiro passo do cadastro?',
                    link: '/flanswers-tipo-beneficiario' },
                { label: 'Como devo lançar um novo beneficiário?', link: '/flanswers-incluindo-beneficiario' },
                { label: 'Como saber se devo incluir pessoas como Accompanying persons ou como Relatives?',
                    link: '/flanswers-accompanying-relative' },
                { label: 'Quando devo informar Relatives e Enquirer?', link: '/flanswers-relative-enquirer' },
                { label: 'Como faço para transformar um enquirer em um beneficiário?', link: '/flanswers-enquirer-em-beneficiary' },
            ] }
        ]
    };

    static AddRoutes(routes: Routes) {
        routes.push(
            { path: 'types-glossary', component: TypesGlossaryComponent },
            { path: 'flanswers-glossario', component: FlanswersGlossaryComponent },
            { path: 'flanswers-como-acessar', component: FlanswersAccessComponent },
            { path: 'flanswers-qual-usuario', component: FlanswersWhichUserComponent },
            { path: 'flanswers-esqueci-senha', component: FlanswersForgotPasswordComponent },
            { path: 'flanswers-esqueci-usuario', component: FlanswersForgotUserComponent },
            { path: 'flanswers-esqueci-senha-email', component: FlanswersEmailPasswordComponent },
            { path: 'flanswers-casos', component: FlanswersNewCaseComponent },
            { path: 'flanswers-checando-beneficiario', component: FlanswersCheckingBeneficiaryComponent },
            { path: 'flanswers-tipo-beneficiario', component: FlanswersBeneficiaryTypeComponent },
            { path: 'flanswers-incluindo-beneficiario', component: FlanswersBeneficiaryIncludingComponent },
            { path: 'flanswers-accompanying-relative', component: FlanswersAccompanyingRelativeComponent },
            { path: 'flanswers-relative-enquirer', component: FlanswersRelativeEnquirerComponent },
            { path: 'flanswers-enquirer-em-beneficiary', component: FlanswersEnquirerToBeneficiaryComponent },
        );
    }
}
