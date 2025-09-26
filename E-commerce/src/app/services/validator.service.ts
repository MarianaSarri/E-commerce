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
    this.errorList = this.errorList.concat(this.validateDescription(form.description));
    this.errorList = this.errorList.concat(this.validateCategory(form.category));
    this.errorList = this.errorList.concat(this.validateImage(form.image));
    return this.errorList;
  }

  validateName(name: string): Array<AppError> {
    if(name == null || name.trim().length === 0){
      return [{
        valid: false,
        message: 'Title cannot be empty'
      }]
    } else if(name.length < 3 || name.length > 50){
      return [{
        valid: false,
        message: 'Title must be between 3 and 50 characters'
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
    } else if(price <= 0){
      return [{
        valid: false,
        message: 'Price must be greater than 0'
      }]
    }
    return []
  }

  validateDescription(description: string): Array<AppError> {
    if (description == null || description.trim().length === 0) {
      return [{
        valid: false,
        message: 'Description cannot be empty'
      }]
    } else if (description.length < 10 || description.length > 500) {
      return [{
        valid: false,
        message: 'Description must be between 10 and 500 characters'
      }]
    }
    return [];
  }

  validateCategory(category: string): Array<AppError> {
    if (category == null || category.trim().length === 0) {
      return [{
        valid: false,
        message: 'Category cannot be empty'
      }]
    }
    return [];
  }

  validateImage(image: string): Array<AppError> {
    if (image == null || image.trim().length === 0) {
      return [{
        valid: false,
        message: 'Image URL cannot be empty'
      }]
    }
    // Simple URL validation
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i;
    if (!urlPattern.test(image)) {
      return [{
        valid: false,
        message: 'Image URL must be a valid URL ending with png, jpg, jpeg, gif, or svg'
      }]
    }
    return [];
  }
}