import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  template: `
  <div class="spinner m-0 p-0 row col-12 justify-content-center align-items-center">
    <div class="lds-dual-ring"></div>
  </div>
  `,
  styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent {

}
