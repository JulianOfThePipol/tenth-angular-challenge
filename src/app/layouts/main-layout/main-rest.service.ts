import { setCart } from './cartStore/cartStore.actions';
import { Cart } from './../../models/rest.models';
import { Store } from '@ngrx/store';
import { GlobalRestService } from './../../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainRestService {

  constructor(
    private restService: GlobalRestService,
    private cartStore: Store<Cart>
  ) { }

  getCart () {
    this.restService.getCart().subscribe({
      next: response => {
        console.log("cart",response)
        this.cartStore.dispatch(setCart({cart:response.data}))
      }
    })
  }
}
