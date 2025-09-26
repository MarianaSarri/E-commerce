import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { AppError } from '../models/errors';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public errorList: Array<AppError> = [];
  constructor() { }

  validateForm<T extends Product>(form: T): Array<AppError> {
    this.errorList = [];
    this.errorList = this.validateName(form.title);
    this.errorList = this.errorList.concat(this.validatePrice(form.price));
    return this.errorList;
  }

  validateName(name: string): Array<AppError> {
    if(name == null){
      return [{
        valid: false,
        message: 'Name cannot be null'
      }]
    } else if(name.length < 3 || name.length > 50){
      return [{
        valid: false,
        message: 'Name must be between 3 and 50 characters'
      }]
    }
    return [];
  }

  validatePrice(price: number): Array<AppError> {
    if(price == null){
      return [{
        valid: false,
        message: 'Price cannot be null'
      }]
    } else if(price == 0){
      return [{
        valid: false,
        message: 'Price must be greater than 0'
      }]
    }
    return []
  }
}
