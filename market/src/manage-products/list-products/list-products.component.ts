import { Component } from '@angular/core';
import { ListProductsService } from '../products.service';
import { finalize, tap } from 'rxjs';
import { Product } from '../../models/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  public openSidepanel = false;
  public allProducts: Product[] = [];
  public totalProducts = 0;
  public productSelected: Product = {} as Product;

  constructor(
    private productService: ListProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .pipe(
        finalize(() => {
        console.log('Finalized');
      })
    ).subscribe((response: Product[]) => {
      this.allProducts = response;
      this.totalProducts = response.length;
      console.log('Response', response);
    });
  } 

  openPanel(productId: number) {
    this.openSidepanel = true;

    this.productService.getProduct(productId)
      .pipe(finalize(() => {
        console.log('Finalized');
      }))
      .subscribe((response) => {
        this.productSelected = response;
      });
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
