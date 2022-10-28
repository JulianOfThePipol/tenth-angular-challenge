import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { StoreModule } from '@ngrx/store';
import * as fromCategories from './featureStore/categories.reducers';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCategories.categoriesFeatureKey,
      fromCategories.categoryReducers
    ),

    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CategoriesComponent],
})
export class CategoriesModule {}
