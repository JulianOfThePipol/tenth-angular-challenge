import { Cart } from './../../../models/rest.models';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCart = createFeatureSelector<Cart>("cart")

export const cartFromStore = createSelector(
    selectCart,
    (cart) => cart
)

export const cartItemsAmount = createSelector(
    selectCart,
    (cart) => {
        let itemAmount:number = 0
        cart.items.map(
            item => {
                itemAmount += item.quantity
            }
        )
        return itemAmount}
)