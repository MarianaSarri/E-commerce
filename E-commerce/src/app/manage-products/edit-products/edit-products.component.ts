import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductsService } from '../products.service';
import { finalize } from 'rxjs';
import { Product } from '../../models/products';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'sidepanel-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss'
})
export class EditProductsComponent implements OnInit {

  @Input() public isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() productSelected: Product = {} as Product;
  @Output() productSelectedChange = new EventEmitter<Product>();

  readonly = true;
  showMessage: string = '';

  constructor(
    private productService: ProductsService,
    public validatorService: ValidatorService
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productSelected']) {
      if(this.productSelected?.id){
        this.readonly = true;
      } else {
        this.readonly = false;
      }
    }
  }

  deleteProduct() {
    this.productService.DeleteProduct(this.productSelected.id)
      .pipe(finalize(() => {
        console.log('Finalized delete');
      }))
      .subscribe(() => {
        this.productSelectedChange.emit({} as Product);
        this.closePanel();
      });
  }

  editProduct() {
    this.validatorService.validateForm<Product>(this.productSelected);
    
    if(this.validatorService.errorList.length > 0){
      this.showMessage = '';
      return;
    }

    this.productService.UpdateProduct(this.productSelected.id, this.productSelected)
      .pipe(finalize(() => {
        console.log('Finalized edit');
      }))
      .subscribe((response) => {
        this.showMessage =  'Product saved successfully';
        this.validatorService.errorList = [];
        this.readonly = true;
        this.productSelectedChange.emit(response);
      });
  }

  InsertProduct() {
    this.validatorService.validateForm<Product>(this.productSelected);
    
    if(this.validatorService.errorList.length > 0){
      this.showMessage = '';
      return;
    }

    this.productService.insertProduct(this.productSelected)
      .pipe(finalize(() => {
        console.log('Finalized insert');
      }))
      .subscribe((response) => {
        this.showMessage =  'Product saved successfully';
        this.validatorService.errorList = [];
        this.productSelectedChange.emit(response);
        this.readonly = true;
    });
  }

  saveProduct(){
    if(this.productSelected?.id == null || this.productSelected?.id == undefined){
      this.InsertProduct();
    } else {
      this.editProduct();
    }
  }

  editPanel(){
    this.readonly = false;
  }

  closePanel() {
    this.showMessage = '';
    this.validatorService.errorList = [];
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}