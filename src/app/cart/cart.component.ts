import { CartService } from './../shared/services/cart.service';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { ProductDialogComponent } from './../shared/product-dialog/product-dialog.component';
import { GlobalRestService } from './../core/services/global-rest.service';
import { MatDialog } from '@angular/material/dialog';

import { cartItemsAmount, cartFromStore } from './../layouts/main-layout/cartStore/cartStore.selectors';
import { Cart, Product } from './../models/rest.models';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['quantity','name', 'description', 'price', 'total', 'id', 'cross'];
  cart: Cart = {
    total: 0,
    total_items: 0,
    items: [],
  };
  itemsAmount = 0
  constructor(
    private cartStore: Store<Cart>,
    private restService:GlobalRestService,
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartStore.select(cartFromStore).subscribe({
      next: cart => this.cart = cart
    })

    this.cartStore.select(cartItemsAmount).subscribe({
      next: amount => this.itemsAmount = amount
    })
  }

  seeProduct(product_id:number) {
    console.log(product_id)
    this.restService.getSingleProductWithId(product_id as number).subscribe({
      next: response => this.openDialog(response.data[0])
    })
  }
  openDialog(data: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: data,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }

  removeProduct(product_id:number) {
    this.cartService.removeItemFromCart(product_id,this.cart.items.length)
  }
}
