import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  first,
  Observable,
  Subject,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductItem } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public pageTitle = 'Abordagem Comum';

  public displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'discountPercentage',
  ];

  public readonly baseUrl = environment.baseUrl;

  public products!: ProductItem[];

  public product$: Observable<Product> = this.httpClient.get<Product>(
    `${this.baseUrl}/products`
  );

  constructor(private readonly httpClient: HttpClient) {}

  public getFirstName(name: string): string {
    return name.split(' ')[0];
  }

  public updateTitle(): void {
    this.pageTitle = `${this.pageTitle}.`;
  }
}
