import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionNavigationComponent } from './action-navigation/action-navigation.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AuthGuard } from '../authentication/auth-guard';
import { AboutFlow } from './about-flow/about-flow';
import { About } from './about/about';
// Estes imports são necessários pois, do contrário, dá erro na compilação otimizada
  // imports about-flow
import { TypesGlossaryComponent } from './about-flow/types-glossary/types-glossary.component';
import { FlanswersGlossaryComponent } from './about-flow/flanswers-glossary/flanswers-glossary.component';
import { FlanswersAccessComponent } from './about-flow/flanswers-access/flanswers-access.component';
import { FlanswersWhichUserComponent } from './about-flow/flanswers-which-user/flanswers-which-user.component';
import { FlanswersForgotPasswordComponent } from './about-flow/flanswers-forgot-password/flanswers-forgot-password.component';
import { FlanswersForgotUserComponent } from './about-flow/flanswers-forgot-user/flanswers-forgot-user.component';
import { FlanswersEmailPasswordComponent } from './about-flow/flanswers-email-password/flanswers-email-password.component';
import { FlanswersNewCaseComponent } from './about-flow/cases/flanswers-new-case/flanswers-new-case.component';
  // tslint:disable-next-line:max-line-length
import { FlanswersCheckingBeneficiaryComponent } from './about-flow/cases/flanswers-checking-beneficiary/flanswers-checking-beneficiary.component';
import { FlanswersBeneficiaryTypeComponent } from './about-flow/cases/flanswers-beneficiary-type/flanswers-beneficiary-type.component';
  // tslint:disable-next-line:max-line-length
import { FlanswersBeneficiaryIncludingComponent } from './about-flow/cases/flanswers-beneficiary-including/flanswers-beneficiary-including.component';
  // tslint:disable-next-line:max-line-length
import { FlanswersAccompanyingRelativeComponent } from './about-flow/cases/flanswers-accompanying-relative/flanswers-accompanying-relative.component';
import { FlanswersRelativeEnquirerComponent } from './about-flow/cases/flanswers-relative-enquirer/flanswers-relative-enquirer.component';
  // tslint:disable-next-line:max-line-length
import { FlanswersEnquirerToBeneficiaryComponent } from './about-flow/cases/flanswers-enquirer-to-beneficiary/flanswers-enquirer-to-beneficiary.component';
import { AppGoalComponent } from './about/app-goal/app-goal.component';
import { AppHowComponent } from './about/app-how/app-how.component';
import { AppRegisteringComponent } from './about/app-registering/app-registering.component';
import { AppScenariosComponent } from './about/app-scenarios/app-scenarios.component';
//

const routes: Routes = [
  { path: '', component: DefaultPageComponent},
  { path: 'actions', component: ActionNavigationComponent, canActivate: [AuthGuard] },
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
  { path: 'app-goal', component: AppGoalComponent },
  { path: 'app-how', component: AppHowComponent },
  { path: 'app-registering', component: AppRegisteringComponent },
  { path: 'app-scenarios', component: AppScenariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
