import { cartFromStore } from './../../layouts/main-layout/cartStore/cartStore.selectors';
import { LikeService } from './../services/like.service';
import { CartService } from './../services/cart.service';
import { Cart, Product, CartItem } from './../../models/rest.models';
import { Store } from '@ngrx/store';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
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
    private likeService: LikeService,
    private router: Router,
    private snackbar: SnackbarService
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

  addItemToCart(amount: number) {
    if(!localStorage.getItem('user')) {
      this.noUserAction('Please, log in to add products to cart');
      return
    }
    if(!localStorage.getItem('user')) {
      this.router.navigate(['/credentials']);
      this.closeDialog();
      return 
    }
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
    if(!localStorage.getItem('user')) {
      this.noUserAction('Please, log in to rate products');
      return
    }
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

  noUserAction(message:string) {
    this.router.navigate(['/credentials']);
    this.closeDialog();
    this.snackbar.openSnackBarWarning(message)
  }
}

