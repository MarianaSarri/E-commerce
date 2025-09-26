import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [ListProductsComponent, EditProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ManageProductsModule { }
