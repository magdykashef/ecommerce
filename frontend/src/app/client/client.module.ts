import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { CoreModule } from './core/core.module';
import { SpinnerLoaderComponent } from '../shared/components/spinner-loader/spinner-loader.component';


@NgModule({
  declarations: [
    ClientComponent,
    SpinnerLoaderComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CoreModule
  ]
})
export class ClientModule { }
