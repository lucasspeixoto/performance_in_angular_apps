import * as fromApp from '@app/app.state';

import * as ProductActions from './product.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, tap, map } from 'rxjs/operators';

import { getProductItems } from './product.selectors';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '@features/product/models/product.model';
import { environment } from '@envs/environment';

@Injectable()
export class ProductEffects {
  public readonly baseUrl = environment.baseUrl;

  public loadProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.LoadProduct),
        withLatestFrom(this._store.select(getProductItems)),
        switchMap(([, productItems]) => {
          console.log(productItems);
          if (!productItems) {
            return this._httpClient
              .get<Product>(`${this.baseUrl}/products`)
              .pipe(
                tap((data) => {
                  this._store.dispatch(
                    ProductActions.SetProduct({
                      payload: data,
                    })
                  );
                }),
                map(() => ProductActions.LoadProductSuccess())
              );
          }

          return of(ProductActions.LoadProductSuccess());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly _store: Store<fromApp.AppState>,
    private readonly _httpClient: HttpClient
  ) {}
}
