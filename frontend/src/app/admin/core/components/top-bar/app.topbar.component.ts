import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../../../admin.component';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../../security/auth.service';

@Component({
	selector: 'app-topbar',
	templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

	items: MenuItem[];
	user_name = '';

	constructor(
		public admin: AdminComponent,
		public authService: AuthService,
	) { }


	ngOnInit(): void {
		this.authService.user$.subscribe(
			(user) => {
				if (user) this.user_name = user.user_name;
				else this.user_name = '';
			},
			() => this.user_name = ''
		);
	}
}
