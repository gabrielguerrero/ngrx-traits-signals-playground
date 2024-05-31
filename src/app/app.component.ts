import { Component } from '@angular/core';
import { ProductBranchListInfiniteComponent } from './product-list-detail/product-branch-list-infinite.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductBranchListInfiniteComponent],
  template: '<product-branch-infinite-list/>',
})
export class AppComponent {
  title = 'ngrx-traits-signals-playground';
}
