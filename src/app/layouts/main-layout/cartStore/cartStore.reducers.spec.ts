import { cartInitialStateMock } from "src/app/mocks/stores/cart.store.mock";
import { Action } from '@ngrx/store';

import * as cartStore from "./carstStore.reducers";
import * as cartActions from "./cartStore.actions"
import { cartItemMock } from "src/app/mocks/data.mock";



describe('Store: cart', () => {
    it('Should have a default state', () => {
        const { initialState } = cartStore;
        const action = {type: ''};
        const state = cartStore.cartReducers(undefined, action);
        expect(state).toBe(initialState);
    })
    
    it('should save cart in store on action setCart call', () => {
      const expected = cartInitialStateMock ;
      const action = cartActions.setCart({cart:cartInitialStateMock});
      expect(cartStore.cartReducers(undefined, action)).toEqual(expected);
    });

    it(`should add item to store on addFirstItem and addItem action call`, () => {
        const items = [cartItemMock]
        const expected = {...cartStore.initialState};
        expected.items = items
        const action = cartActions.addFirstItem({item:cartItemMock, previousState: cartStore.initialState});
        expect(cartStore.cartReducers( cartStore.initialState, action)).toEqual(expected);
        const actionTwo = cartActions.addItem({item:cartItemMock, previousState: cartStore.initialState});
        expect(cartStore.cartReducers( cartStore.initialState, actionTwo)).toEqual(expected);
    })

    it(`should remove item from store on removeItem action`, () => {
        const id = cartInitialStateMock.items[0].id as number;
        const items = cartInitialStateMock.items.filter((item)=>item.id !== id)
        const expected = {...cartInitialStateMock};
        expected.items = items
        const action = cartActions.removeItem({cartItemId:id, previousState: cartStore.initialState});
        expect(cartStore.cartReducers( cartInitialStateMock, action)).toEqual(expected);
    })

    it(`should remove item from store on removeItem action`, () => {
        const id = cartInitialStateMock.items[0].id as number;
        const items = cartInitialStateMock.items;
        items[0].quantity = 5
        const initialState = {...cartInitialStateMock};
        initialState.items = items
        const action = cartActions.changeItemQuantity({item:cartInitialStateMock.items[0], cartItemId:id, previousState: cartStore.initialState});
        expect(cartStore.cartReducers( initialState, action)).toEqual(cartInitialStateMock);
    })

    it('should delete cart on delete cart and buy actions',() => {
        const expected = cartStore.initialState;
        const action = cartActions.deleteCart({previousState: cartInitialStateMock});
        expect(cartStore.cartReducers(cartInitialStateMock, action)).toEqual(expected);
        const actionTwo = cartActions.buyCart({previousState: cartInitialStateMock});
        expect(cartStore.cartReducers(cartInitialStateMock, actionTwo)).toEqual(expected);
    })
});