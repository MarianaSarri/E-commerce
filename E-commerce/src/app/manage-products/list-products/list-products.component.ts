import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
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
    private productService: ProductsService,
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
      });
  }

  openPanel(productId: number = 0) {
    this.openSidepanel = true;
    this.productSelected = {} as Product;

    if (productId != 0) {
      this.productService.getProduct(productId)
        .pipe(finalize(() => {
          console.log('Finalized');
        }))
        .subscribe((response) => {
          this.productSelected = response;
        });
    }
  }

  trackById(index: number, item: Product) {
    return item.id;
  }

  updateCard(updatedProduct: Product) {
    let index = this.allProducts.findIndex(p => p.id === updatedProduct?.id);
    if (index !== -1) {
        this.allProducts[index] = updatedProduct;
    } else if(updatedProduct?.id){
        this.allProducts.push(updatedProduct);
        this.totalProducts++;
    } else {
      let i = this.allProducts.findIndex(p => p.id === this.productSelected?.id);
      this.allProducts.splice(i,1)
      this.totalProducts--;
    }
  }
}
