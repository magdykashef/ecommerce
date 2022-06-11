import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  showSpinner = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationStart) {
          this.showSpinner = true;
          document.body.style.overflowY = 'hidden';
        }
        if (event instanceof NavigationCancel || event instanceof NavigationError) {
          this.showSpinner = false;
          document.body.style.overflowY = 'scroll';
        }
        if (event instanceof NavigationEnd) {
          this.showSpinner = false;
          document.body.style.overflowY = 'scroll';
        }
      }
    );
  }
}
