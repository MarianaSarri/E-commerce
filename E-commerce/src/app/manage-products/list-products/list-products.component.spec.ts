import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../../env/env';
import { ProductsService } from '../products.service';
import { ListProductsComponent } from './list-products.component';
import { Product } from '../../models/products';

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let productsService: ProductsService;

  const mockProducts: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 10,
      description: 'Description 1',
      category: 'Category 1',
      image: 'http://example.com/image1.jpg',
      rating: { rate: 4, count: 10 }
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      description: 'Description 2',
      category: 'Category 2',
      image: 'http://example.com/image2.jpg',
      rating: { rate: 5, count: 20 }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      providers: [
        ProductsService,
        {
          provide: 'environment',
          useValue: environment
        }
      ],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    productsService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    spyOn(productsService, 'getAllProducts').and.returnValue(of(mockProducts));
    component.ngOnInit();
    expect(component.allProducts.length).toBe(2);
    expect(component.allProducts[0].title).toBe('Product 1');
  });

  it('should select a product', () => {
    spyOn(productsService, 'getProduct').and.returnValue(of(mockProducts[1]));
    component.allProducts = mockProducts;
    component.openPanel(mockProducts[1].id);
    expect(component.productSelected).toEqual(mockProducts[1]);
  });

  it('should clear selected product', () => {
    component.productSelected = mockProducts[0];
    component.openPanel(0);
    expect(component.productSelected).toEqual({} as Product);
  });
});