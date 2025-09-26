import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from '../../../../env/env';
import { ProductsService } from '../products.service';
import { EditProductsComponent } from './edit-products.component';
import { FormsModule } from '@angular/forms';

describe('EditProductsComponent', () => {
  let component: EditProductsComponent;
  let fixture: ComponentFixture<EditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductsComponent],
      providers: [
        ProductsService,
        {
            provide: 'environment',
            useValue: environment
        }
      ],
      imports: [HttpClientModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
