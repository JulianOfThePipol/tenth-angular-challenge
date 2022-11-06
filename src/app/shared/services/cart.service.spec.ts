import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cartInitialStateMock, cartSelectorsMock } from 'src/app/mocks/stores/cart.store.mock';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService,
      store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        provideMockStore({
          initialState: { cart: cartInitialStateMock },
          selectors: cartSelectorsMock,
        }),
      ]
    });
    service = TestBed.inject(CartService);
    store = TestBed.inject(MockStore)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
