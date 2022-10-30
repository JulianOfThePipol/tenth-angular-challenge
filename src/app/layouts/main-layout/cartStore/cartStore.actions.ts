import { Cart, CartItem} from './../../../models/rest.models';
import { createAction, props } from '@ngrx/store';

export const setCart = createAction (
    '[Cart Set] Set Cart',
    props<{cart: Cart | null}> ()
)

export const addFirstItem = createAction (
    "[CartItem AddFirst] AddFirst CartItem",
    props<{item: CartItem, previousState: Cart }> ()
)

export const addItem = createAction (
    "[CartItem Add] Add CartItem",
    props<{item: CartItem , previousState: Cart}> ()
)

export const changeItemQuantity = createAction (
    "[CartItem ChangeQuantity] ChangeQuantity CartItem",
    props<{item: CartItem, cartItemId: number , previousState: Cart}> ()
)

export const removeItem = createAction (
    "[CartItem Remove] Remove CartItem",
    props<{cartItemId:number, previousState: Cart}> ()
)

export const deleteCart = createAction (
    "[Cart Remove] Remove Cart",
    props<{ previousState: Cart}> ()
)