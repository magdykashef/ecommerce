import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './receipt.component';


@NgModule({
  declarations: [
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    ReceiptRoutingModule
  ]
})
export class ReceiptModule { }
