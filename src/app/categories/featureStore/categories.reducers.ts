import { addCategories } from './categories.actions';
import { Category } from './../../models/rest.models';
import {
  createReducer,
  on
} from '@ngrx/store';

export const categoriesFeatureKey = 'categories';

export interface CategoryState {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: []
}

export const categoryReducers = createReducer(
  initialState,
  on(addCategories, (state, payload) => {
    return {...state, categories: payload.categories}
  }) 
)


