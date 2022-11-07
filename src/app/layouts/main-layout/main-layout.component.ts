import { cartItemsAmount } from './cartStore/cartStore.selectors';
import { Cart } from './../../models/rest.models';
import { Store, select } from '@ngrx/store';
import { TokenService } from './../../core/services/token.service';
import { MainRestService } from './main-rest.service';
import { Component, OnInit, Input } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Animations } from 'src/assets/animations/animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    Animations.slideInAnimation
  ]

})
export class MainLayoutComponent implements OnInit {
  cartItemsAmount = 0
  constructor(
    private restService: MainRestService,
    private tokenService: TokenService,
    private cartStore: Store<Cart>,
    private contexts: ChildrenOutletContexts
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.restService.getCart();
      this.cartStore.select(cartItemsAmount).subscribe({
        next: cartItemsAmount => this.cartItemsAmount= cartItemsAmount
      });
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
