import { cartFromStore } from './../../layouts/main-layout/cartStore/cartStore.selectors';
import { Cart } from './../../models/rest.models';
import { Store } from '@ngrx/store';
import { addItem, changeItemQuantity, deleteCart, removeItem } from './../../layouts/main-layout/cartStore/cartStore.actions';
import { GlobalRestService } from './../../core/services/global-rest.service';
import { Injectable, OnInit } from '@angular/core';
import { addFirstItem } from 'src/app/layouts/main-layout/cartStore/cartStore.actions';

@Injectable()
export class CartService {
  snapshot!:Cart

  constructor(
    private cartStore: Store<Cart>
  ) { }

  addItemToCart(amount: number, productId:number, cartItemId: number | null | undefined, total_items:number):void {
    this.getState()
    if (total_items === 0) {
      this.cartStore.dispatch(
        addFirstItem({
          item: {
            product_variant_id: productId,
            quantity: amount,
          },
          previousState: this.snapshot
        })
      );
      return;
    }

    if (cartItemId) {
      this.cartStore.dispatch(
        changeItemQuantity({
          item:{
            product_variant_id: productId,
            quantity: amount
          },
          cartItemId: cartItemId,
          previousState: this.snapshot
        })
      )
      return;
    }
    
    this.cartStore.dispatch(
      addItem({
        item: {
          product_variant_id: productId,
          quantity: amount,
        },
        previousState: this.snapshot
      })
    );
  }

  removeItemFromCart (cartItemId: number, itemsLength: number):void {
    if (itemsLength > 1) {
      this.cartStore.dispatch(removeItem({ 
        cartItemId:cartItemId,
        previousState: this.snapshot }))
    } else {
      this.cartStore.dispatch(deleteCart({previousState: this.snapshot}))
    }
  }


  getState () {
    this.cartStore.select(cartFromStore).subscribe(s => this.snapshot = s);
  }
}
