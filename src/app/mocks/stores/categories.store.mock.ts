import { createAction, createReducer, createSelector, on, props } from "@ngrx/store";
import { CategoryState } from "src/app/categories/featureStore/categories.reducers";
import { Category } from "src/app/models/rest.models";
import { getCategoriesResponseMock } from "../data.mock";


export const initialStateCategoriesMock: CategoryState = {
    categories: getCategoriesResponseMock.data
}
