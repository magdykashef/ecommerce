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
      },
      {
        path:'products',
        loadChildren: ()=> import('./pages/products/products.module').then((m)=> m.ProductsModule)
      },
      {
        path:'product-details',
        loadChildren: ()=> import('./pages/product-details/product-details.module').then((m)=> m.ProductDetailsModule)
      },
      {
        path:'cart',
        loadChildren: ()=> import('./pages/cart/cart.module').then((m)=> m.CartModule)
      },
      {
        path:'checkout',
        loadChildren: ()=> import('./pages/checkout/checkout.module').then((m)=> m.CheckoutModule)
      },
      {
        path:'error',
        loadChildren: ()=> import('./pages/error/error.module').then((m)=> m.ErrorModule)
      },
      {
        path:'orders',
        loadChildren: ()=> import('./pages/orders/orders.module').then((m)=> m.OrdersModule)
      },
      {
        path:'payment',
        loadChildren: ()=> import('./pages/payment/payment.module').then((m)=> m.PaymentModule)
      },
      {
        path:'receipt',
        loadChildren: ()=> import('./pages/receipt/receipt.module').then((m)=> m.ReceiptModule)
      },
      {
        path:'profile',
        loadChildren: ()=> import('./pages/profile/profile.module').then((m)=> m.ProfileModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
