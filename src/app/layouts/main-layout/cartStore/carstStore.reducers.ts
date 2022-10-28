import { setCart } from './cartStore.actions';
import { Cart } from './../../../models/rest.models';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';

export const cartFeatureKey = 'cart';


const initialState: Cart = {
  id: 0,
  user_id: 0,
  number: 0,
  total_items: "0",
  status: "",
  total: "",
  created_at: "",
  completed_at:"",
  items: []
}

export const cartReducers = createReducer(
  initialState,
  on(setCart, (state, payload) => {
    return {...state, 
      id: payload.cart.id,
      user_id: payload.cart.user_id,
      number: payload.cart.number,
      total_items: payload.cart.total_items,
      status: payload.cart.status,
      total: payload.cart.total,
      created_at: payload.cart.created_at,
      completed_at:payload.cart.completed_at,
      items: payload.cart.items
    }
  }) 
)





