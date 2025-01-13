import { Component } from '@angular/core';
import { ProductListDetailLocalComponent } from './product-list-detail/product-list-detail-local.component';

@Component({
  selector: 'app-root',
  imports: [ProductListDetailLocalComponent],
  template: '<product-list-detail-local/>',
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
