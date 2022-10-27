import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '@features/product/models/product.model';
import { AddProduct, SetProduct } from './product.actions';

export interface ProductState {
  product: Product | undefined;
}

const initialState: ProductState = {
  product: undefined,
};

const _productReducer = createReducer(
  initialState,
  on(SetProduct, (_state, { payload }) => {
    return Object.assign({}, _state, {
      product: payload,
    });
  }),
  on(AddProduct, (_state, { payload }) => {
    return Object.assign({}, _state, {
      product: {
        products: [..._state.product!.products, payload],
      },
    });
  })
);

export const productReducer = (
  state: ProductState | undefined,
  action: Action
): ProductState => _productReducer(state, action);
