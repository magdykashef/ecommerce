import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path:'login',
        loadChildren: ()=> import('./pages/login/login.module').then((m)=> m.LoginModule)
      },
      {
        path:'register',
        loadChildren: ()=> import('./pages/register/register.module').then((m)=> m.RegisterModule)
      },
      {
        path:'contact-us',
        loadChildren: ()=> import('./pages/contact-us/contact-us.module').then((m)=> m.ContactUsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
