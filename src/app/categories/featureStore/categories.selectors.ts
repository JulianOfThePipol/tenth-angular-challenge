import { Category } from './../../models/rest.models';
import { CategoryState } from './categories.reducers';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCategoriesState = createFeatureSelector<CategoryState>("categories")

export const categoriesFromStore = createSelector(
    selectCategoriesState,
    (categories) => categories.categories
)