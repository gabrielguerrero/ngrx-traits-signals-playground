import { inject } from '@angular/core';
import {
  callConfig,
  typedCallConfig,
  withCalls,
  withCallStatus,
  withEntitiesLoadingCall,
  withEntitiesRemoteFilter,
  withEntitiesRemotePagination,
  withEntitiesSingleSelection,
  withLogger,
} from '@ngrx-traits/signals';
import { signalStore, type } from '@ngrx/signals';
import { entityConfig, withEntities } from '@ngrx/signals/entities';

import { Product } from '../models';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

const entity = type<Product>();
const collection = 'products';
const productEntityConfig = entityConfig({
  entity,
  collection,
  selectId: (entity) => entity.id,
});
export const ProductsRemoteStore = signalStore(
  withEntities(productEntityConfig),
  withCallStatus({ collection, initialValue: 'loading' }),
  withEntitiesRemotePagination({
    ...productEntityConfig,
    pageSize: 5,
    pagesToCache: 4,
  }),
  withEntitiesRemoteFilter({
    ...productEntityConfig,
    defaultFilter: {
      search: '',
    },
  }),
  withEntitiesSingleSelection(productEntityConfig),
  // this replace the withHooks
  withEntitiesLoadingCall({
    ...productEntityConfig,
    fetchEntities: ({
      productsEntitiesFilter,
      productsEntitiesPagedRequest,
    }) => {
      return inject(ProductService)
        .getProducts({
          search: productsEntitiesFilter().search,
          take: productsEntitiesPagedRequest().size,
          skip: productsEntitiesPagedRequest().startIndex,
        })
        .pipe(map((res) => ({ entities: res.resultList, total: res.total })));
    },
  }),
  withCalls(() => ({
    loadProductDetail: ({ id }: { id: string }) =>
      inject(ProductService).getProductDetail(id),
  })),
  withLogger({ name: 'store' }),
);
