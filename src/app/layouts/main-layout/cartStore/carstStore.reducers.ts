import { setCart, addItem, addFirstItem, changeItemQuantity, removeItem, deleteCart } from './cartStore.actions';
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
  total_items: 0,
  status: "",
  total: 0,
  created_at: "",
  completed_at:"",
  items: []
}

export const cartReducers = createReducer(
  initialState,
  on(setCart, (state, payload) => {
    if (payload.cart === null) {
      return initialState
    }
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
  }), 

  on(addItem, addFirstItem, (state, payload) => {
    let items = state.items.slice(0);
    items.push(payload.item)
    return {...state,
      items: items
    }
  }),

  on(changeItemQuantity, (state, payload) => {
    let items = state.items.slice(0);
    let currentIndex = items.findIndex(function(item) {
      return item.product_variant_id === payload.item.product_variant_id
    })
    items[currentIndex] = payload.item
    return {...state,
      items: items
    }
  }),

  on(removeItem, (state, payload) => {
    let items = state.items.slice(0);
    let currentIndex = items.findIndex(function(item) {
      return item.id === payload.cartItemId
    });
    items.splice(currentIndex, 1)
    return {...state,
      items: items
    }
  }),

  on(deleteCart, () => {
      return initialState
  })
)





