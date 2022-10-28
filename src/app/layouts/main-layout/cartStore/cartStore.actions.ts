import { Cart } from './../../../models/rest.models';
import { createAction, props } from '@ngrx/store';

export const setCart = createAction (
    '[Cart Set] Set Cart',
    props<{cart: Cart}> ()
)