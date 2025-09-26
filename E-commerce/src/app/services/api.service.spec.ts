import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EnvironmentModel } from '../models/env';
import { ApiService } from './api.service';

const mockEnv: EnvironmentModel = {
  apiUrl: 'http://localhost:3000',
  authEndpoint: 'http://localhost:3000/auth'
};

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'environment', useValue: mockEnv }
      ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform GET request', () => {
    service.performGet('/products').subscribe();
    const req = httpMock.expectOne('http://localhost:3000/products');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should perform POST request', () => {
    const data = { name: 'test' };
    service.performPost('/products', data).subscribe();
    const req = httpMock.expectOne('http://localhost:3000/products');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(data);
    req.flush({});
  });

  it('should perform PUT request', () => {
    const data = { name: 'test' };
    service.performPut('/products/1', data).subscribe();
    const req = httpMock.expectOne('http://localhost:3000/products/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(data);
    req.flush({});
  });

  it('should perform DELETE request', () => {
    service.performDelete('/products/1').subscribe();
    const req = httpMock.expectOne('http://localhost:3000/products/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
