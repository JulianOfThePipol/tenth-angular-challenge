import { Category } from './../models/rest.models';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { categoryMock } from './data.mock';

@Component({
    selector: 'app-categories',
    template: '<p>Mock html<button (click)="emit()" id="mock-button-categories"></button></p>'
  })
export class CategoriesComponentMock {
    @Output() categoryEmitter = new EventEmitter<Category>();
    @Input() currentCategory: Category = categoryMock;
  
    categories: Category[] = [];
    currentCategories: Category[] = [];
    currentPage = 1

    emit(){
      this.categoryEmitter.emit(categoryMock)
    }

  }

