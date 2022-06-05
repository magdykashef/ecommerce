import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './security/auth.guard';


@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '', loadChildren: () => import('./client/client.module').then((m) => m.ClientModule),
			},
			{
				path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
				canActivate: [AuthGuard],
				data: { roles: ['admin'] }
			},
			{ path: '**', redirectTo: '' },
		], { scrollPositionRestoration: 'enabled' })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
