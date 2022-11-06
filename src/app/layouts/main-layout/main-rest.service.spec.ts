import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GlobalRestService } from 'src/app/core/services/global-rest.service';
import { cartInitialStateMock, cartSelectorsMock } from 'src/app/mocks/stores/cart.store.mock';

import { MainRestService } from './main-rest.service';

describe('MainRestService', () => {
  let service: MainRestService,
      restService: GlobalRestService,
      store: MockStore;

  beforeEach(() => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService',['getCart'])
    TestBed.configureTestingModule({
      providers:[
        MainRestService,
        {provide: GlobalRestService, useValue: restServiceSpy},
        provideMockStore({
          initialState: { cart: cartInitialStateMock },
          selectors: cartSelectorsMock,
        })
      ]
    });
    service = TestBed.inject(MainRestService);
    restService = TestBed.inject(GlobalRestService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
