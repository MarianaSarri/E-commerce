import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListProductsService } from '../products.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'sidepanel-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss'
})
export class EditProductsComponent implements OnInit {

  @Input() public isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor(private productService: ListProductsService) { }

  ngOnInit(): void {
    this.productService.getProduct(1)
      .pipe(finalize(() => {
        console.log('Finalized');
      }))
      .subscribe((response) => {
        console.log('Response', response);
      });
  }

  closePanel() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

}