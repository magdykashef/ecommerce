import { AuthService } from './../../../../security/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Ecommerce';
  dropdownOpen: boolean = false;
  dropdownNavbar: boolean = false;
  constructor(public authService: AuthService) {}
  searchProducts(search: string) {
    console.log(search);
  }
}
