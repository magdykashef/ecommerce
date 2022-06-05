import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AppMenuComponent } from './core/components/menu/app.menu.component';
import { AppMenuitemComponent } from './core/components/menu/app.menuitem.component';
import { AppTopBarComponent } from './core/components/top-bar/app.topbar.component';
import { AppConfigComponent } from './core/components/app-config/app.config.component';


@NgModule({
  declarations: [
    AdminComponent,
    AppTopBarComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    AdminComponent,
    AppTopBarComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
  ]
})
export class AdminModule { }
