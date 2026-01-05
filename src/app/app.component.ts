import { Component } from '@angular/core';
import { ProductListDetailLocalComponent } from './product-list-detail/product-list-detail-local.component';
import { ProductListDetailRemoteComponent } from './product-list-detail/product-list-detail-remote.component';

@Component({
  selector: 'app-root',
  imports: [
    /*ProductListDetailLocalComponent,*/ ProductListDetailRemoteComponent,
  ],
  template: '<product-list-detail-remote/>',
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
