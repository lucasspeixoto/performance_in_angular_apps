import * as fromProduct from '@shared/store/product.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  product: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  product: fromProduct.productReducer,
};
