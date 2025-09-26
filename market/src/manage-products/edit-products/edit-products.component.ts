import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListProductsService } from '../products.service';
import { finalize } from 'rxjs';
import { Product } from '../../models/products';

@Component({
  selector: 'sidepanel-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss'
})
export class EditProductsComponent implements OnInit {

  @Input() public isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() productSelected: Product = {} as Product;

  constructor(private productService: ListProductsService) { }

  ngOnInit(): void {
    console.log('Product selected:', this.productSelected);
  }

  deleteProduct() {
    console.log('Deleting product:', this.productSelected);
    this.productService.DeleteProduct(this.productSelected.id)
      .pipe(finalize(() => {
        console.log('Finalized delete');
        this.closePanel();
      }))
      .subscribe((response) => {
        console.log('Delete response', response);
      });
  }

  editProduct() {
    console.log('Editing product:', this.productSelected);
    this.productService.UpdateProduct(this.productSelected.id, this.productSelected)
      .pipe(finalize(() => {
        console.log('Finalized edit');
        this.closePanel();
      }))
      .subscribe((response) => {
        console.log('Edit response', response);
      });
  }

  editPanel(){
    console.log('Editing panel:', this.productSelected);
    // tirar estado readonly dos inputs
  }

  closePanel() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}