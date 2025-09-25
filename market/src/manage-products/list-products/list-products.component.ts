import { Component } from '@angular/core';
import { ListProductsService } from '../products.service';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {

  public openSidepanel = false;

  constructor(
    private listProductsService: ListProductsService,
  ) { }

  ngOnInit(): void {
    this.listProductsService.getAllProducts()
    .pipe(
        finalize(() => {
        console.log('Finalized');
      })
    ).subscribe((response) => {
      console.log('Response', response);
    });
  } 

  openPanel() {
    this.openSidepanel = true;
  }
}
