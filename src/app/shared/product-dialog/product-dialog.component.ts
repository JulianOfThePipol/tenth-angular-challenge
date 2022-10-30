import { cartFromStore } from './../../layouts/main-layout/cartStore/cartStore.selectors';
import { LikeService } from './../services/like.service';
import { CartService } from './../services/cart.service';
import { Cart, Product, CartItem } from './../../models/rest.models';
import { Store } from '@ngrx/store';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit, OnDestroy {
  cart: Cart = {
    total: 0,
    total_items: 0,
    items: [],
  };
  cartItem: CartItem | null = null;
  likeState: -1 | 0 | 1 = -1;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private cartStore: Store<Cart>,
    private cartService: CartService,
    private likeService: LikeService
  ) {}

  ngOnInit(): void {
    this.cartStore.select(cartFromStore).subscribe({
      next: (cart) => {
        this.cart = cart;
        let currentIndex = cart.items.findIndex((item) => {
          return item.product_variant_id === this.product.id;
        });
        if (currentIndex !== -1) {
          this.cartItem = cart.items[currentIndex];
        } else {
          this.cartItem = null;
        }
      },
    });
  }

  ngOnDestroy(): void {}

  addItemToCart(amount: number) {
    this.cartService.addItemToCart(
      amount + (this.cartItem?.quantity || 0),
      this.product.id,
      this.cartItem?.id,
      this.cart.total_items
    );
  }

  removeItemsFromCart(amount: number) {
    if (this.cartItem?.id) {
      if (amount < this.cartItem.quantity) {
        this.cartService.addItemToCart(
          this.cartItem.quantity - amount,
          this.product.id,
          this.cartItem?.id,
          this.cart.total_items
        );
      } else {
        this.cartService.removeItemFromCart(
          this.cartItem.id,
          this.cart.items.length
        );
      }
    }
  }

  rateProduct(kind: 'up' | 'down') {
    this.likeService.likeProduct(kind, this.product.id);
    if (kind === 'up') {
      this.likeState = 1;
    } else {
      this.likeState = 0;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

/*     if (localStorage.getItem('user')) {
      let user: User = JSON.parse(localStorage.getItem('user') as string);
      this.likeService.getLiked(this.product.id, user.id).subscribe({
        next: (response) => {
          if (response.data.length < 0) {
            this.likeState = response.data[0].kind;
          }
        },
        error: (error) => (this.likeState = -1),
      });
    } else {
      this.likeState = -1;
    } */
