import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductItem } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public pageTitle = 'Abordagem Comum';

  public displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'discountPercentage',
  ];

  public readonly baseUrl = environment.baseUrl;

  public products!: ProductItem[];

  public products$!: Observable<Product>;

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProductList();
  }

  public getProductList(): void {
    this.products$ = this.httpClient.get<Product>(`${this.baseUrl}/products`);
  }

  public getFirstName(name: string): string {
    console.log('Executando Método!');
    return name.split(' ')[0];
  }

  public updateTitle(): void {
    this.pageTitle = `${this.pageTitle}.`
  }
}
