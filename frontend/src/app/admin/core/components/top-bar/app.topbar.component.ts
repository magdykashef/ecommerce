import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../../../admin.component';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[];
    user_name = '';

    constructor(public admin: AdminComponent) { }
    ngOnInit(): void {
        this.user_name = localStorage.getItem('user_name') || '';
    }
}
