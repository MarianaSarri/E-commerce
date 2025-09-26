import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { ApiService } from '../services/api.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(
    private _apiService: ApiService,
  ) { }

  public getAllProducts(): Observable<Product[]> {
    const url = '/products'

    return this._apiService.performGet<Product[]>(url);
  }

  public getProduct(productId: number): Observable<Product> {
    const url = `/products/${productId}`;

    return this._apiService.performGet<Product>(url);
  }

  public DeleteProduct(productId: number): Observable<Product> {
    const url = `/products/${productId}`;

    return this._apiService.performDelete<Product>(url);
  }

  public UpdateProduct(productId: number, updatedProduct: Product): Observable<Product> {
    const url = `/products/${productId}`;

    return this._apiService.performPut<Product>(url, updatedProduct);
  }

  public insertProduct(newProduct: Product): Observable<Product> {
    const url = `/products`;

    return this._apiService.performPost<Product>(url, newProduct)
      .pipe(
        tap((response) => {
          console.log('Product inserted:', response);
        })
      );
  }
}
