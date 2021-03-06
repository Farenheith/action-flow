import { NgModule } from '@angular/core';
import { TypesGlossaryComponent } from './types-glossary/types-glossary.component';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TypesGlossaryComponent
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
