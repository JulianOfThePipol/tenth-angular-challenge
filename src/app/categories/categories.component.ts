import { Observable } from 'rxjs';
import { categoriesFromStore } from './featureStore/categories.selectors';
import { Category } from './../models/rest.models';
import { addCategories } from './featureStore/categories.actions';
import { CategoriesRestService } from './categories-rest.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryState } from './featureStore/categories.reducers';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Output() categoryEmitter = new EventEmitter<Category>();
  @Input() currentCategory! : Category | null;

  categories: Category[] = [];
  currentCategories: Category[] = [];
  currentPage = 1
  constructor(
    private restService: CategoriesRestService,
    private categoriesStore: Store<CategoryState>
  ) { }

  ngOnInit(): void {
    this.categoriesStore.pipe(
      select(categoriesFromStore)
    ).subscribe({
      next: value => {
        this.categories = value;
        this.changeCurrent(1)
      }
    })

    if(this.categories.length === 0) {
      this.restService.getCategories().subscribe({
        next: response => {
          this.categoriesStore.dispatch(addCategories({categories: response.data}))
        }
      })
    }
  }

  changeCurrent(page:number) {
    this.currentPage = page
    this.currentCategories = this.categories.slice((page-1)*5, (page)*5)
  }
  
  emitCategory (category: Category) {
    this.categoryEmitter.emit(category)
  }
}
