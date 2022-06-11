import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../../security/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Ecommerce';
  brand = 'assets/pngwing.com.png';
  dropdownOpen = false;
  dropdownNavbar = false;
  user_name = '';

  constructor(
    public authService: AuthService,
    private router: Router,
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

  searchProducts(searchKeyword: string) {
    this.router.navigate(['/products'], { queryParams: { searchKeyword }, queryParamsHandling: 'preserve' });
  }
}
