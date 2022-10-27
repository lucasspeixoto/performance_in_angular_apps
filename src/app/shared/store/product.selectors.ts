import * as fromProduct from './product.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProductState =
  createFeatureSelector<fromProduct.ProductState>('product');

export const getProduct = createSelector(
  getProductState,
  (state) => state?.product
);

export const getProductItems = createSelector(
  getProduct,
  (product) => product?.products
);
