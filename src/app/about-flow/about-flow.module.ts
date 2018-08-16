import { NgModule } from '@angular/core';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    TypesGlossaryComponent,
    FlanswersGlossaryComponent,
    FlanswersAccessComponent,
    FlanswersWhichUserComponent,
    FlanswersForgotPasswordComponent,
    FlanswersForgotUserComponent,
    FlanswersEmailPasswordComponent,
    FlanswersNewCaseComponent,
    FlanswersCheckingBeneficiaryComponent,
    FlanswersBeneficiaryTypeComponent,
    FlanswersBeneficiaryIncludingComponent,
    FlanswersAccompanyingRelativeComponent,
    FlanswersRelativeEnquirerComponent,
    FlanswersEnquirerToBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ThfModule
  ],
  providers: [],
  bootstrap: []
})
export class AboutFlowModule { }
