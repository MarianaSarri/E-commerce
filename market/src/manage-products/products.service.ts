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

  public getAllProducts(): Observable<Product> {
    const url = '/products'

    return this._apiService.performGet<Product>(url);
  }

  public getProduct(productId: number): Observable<Product> {
    const url = `/products/${productId}`;

    return this._apiService.performGet<Product>(url);
  }
}
