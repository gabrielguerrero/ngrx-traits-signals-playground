import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListDetailLocalComponent } from './product-list-detail/product-list-detail-local.component';
import { ProductListDetailRemoteComponent } from './product-list-detail/product-list-detail-remote.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ProductListDetailLocalComponent,
        ProductListDetailRemoteComponent,
    ],
    template: '<product-list-detail-local/>'
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
