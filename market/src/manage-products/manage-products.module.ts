import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:  ListProductsComponent},
  { path: 'create', component: EditProductsComponent },
  { path: 'edit/:id', component: EditProductsComponent },
  { path: 'view/:id', component: EditProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ManageProductsModule { }
