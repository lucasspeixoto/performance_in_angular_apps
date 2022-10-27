import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '@app/app.state';
import { getProductItems } from '@app/shared/store/product.selectors';
import { AddProduct, LoadProduct } from '@app/shared/store/product.actions';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss'],
})
export class ProductStoreComponent implements OnInit {
  public pageTitle = 'Abordagem Com Store';

  public displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'discountPercentage',
  ];

  public productItems$ = this._store.select(getProductItems);

  constructor(private readonly _store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(LoadProduct());
  }

  public getFirstName(name: string): string {
    console.log('Executando Método!');
    return name.split(' ')[0];
  }

  public AddNewProduct(): void {
    this._store.dispatch(
      AddProduct({
        payload: {
          id: 0,
          title: 'New Item',
          description: 'Surprise',
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: 'unknowm',
          category: 'unknowm',
          thumbnail: '',
          images: [],
        },
      })
    );
  }
}
