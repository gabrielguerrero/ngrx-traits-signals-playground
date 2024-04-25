import { Component } from '@angular/core';
import { ProductListDetailRemoteComponent } from './product-list-detail/product-list-detail-remote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListDetailRemoteComponent],
  template: '<product-list-detail-remote/>',
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
