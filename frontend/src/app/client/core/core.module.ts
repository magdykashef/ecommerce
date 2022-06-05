import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports:[
    HeaderModule,
    FooterModule,
  ]
})
export class CoreModule { }
