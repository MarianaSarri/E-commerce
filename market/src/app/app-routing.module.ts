import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './manage-products/list-products/list-products.component';

const routes: Routes = 
  [
    {
      component: ListProductsComponent,
      path: '',
      children:[
        {
           path: 'manage-products', loadChildren: () => import('./manage-products/manage-products.module').then(m => m.ManageProductsModule)
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
