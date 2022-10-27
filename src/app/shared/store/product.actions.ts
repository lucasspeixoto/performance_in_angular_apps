import { createAction, props } from '@ngrx/store';
import { Product, ProductItem } from '../../features/product/models/product.model';

export const LoadProduct = createAction('[Product] Load Product');
export const LoadProductSuccess = createAction(
  '[Product] Load Product Success'
);

export const SetProduct = createAction(
  '[Product] Set Product',
  props<{ payload: Product }>()
);

export const AddProduct = createAction(
  '[Product] Add Product',
  props<{ payload: ProductItem }>()
);
