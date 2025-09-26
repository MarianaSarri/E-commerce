import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListProductsComponent, EditProductsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ManageProductsModule { }