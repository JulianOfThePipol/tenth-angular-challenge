import { Category } from './../../models/rest.models';
import { createAction, props } from '@ngrx/store';

export const addCategories = createAction (
    '[Categories Add] Add Categories',
    props<{categories: Category[]}> ()
)