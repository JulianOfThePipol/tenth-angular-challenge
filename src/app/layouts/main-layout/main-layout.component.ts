import { cartItemsAmount } from './cartStore/cartStore.selectors';
import { Cart } from './../../models/rest.models';
import { Store, select } from '@ngrx/store';
import { TokenService } from './../../core/services/token.service';
import { MainRestService } from './main-rest.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']

})
export class MainLayoutComponent implements OnInit {
  cartItemsAmount = 0
  constructor(
    private restService: MainRestService,
    private tokenService: TokenService,
    private cartStore: Store<Cart>
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.restService.getCart()
      this.cartStore.select(cartItemsAmount).subscribe({
        next: cartItemsAmount => this.cartItemsAmount= cartItemsAmount
      })
    }
  }
}
