import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GlobalRestService } from '../core/services/global-rest.service';
import { cartInitialStateMock, cartSelectorsMock } from '../mocks/stores/cart.store.mock';
import { CartService } from '../shared/services/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent,
      fixture: ComponentFixture<CartComponent>,
      cartService: CartService,
      store: MockStore,
      debug: DebugElement,
      loader: HarnessLoader,
      matDialog: MatDialog;

  beforeEach(async () => {
    const cartServiceSpy = jasmine.createSpyObj('CartService', [
      'addItemToCart',
      'removeItemFromCart',
    ]);
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', [
      'getSingleProductWithId'
    ])
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [
        
        MatTableModule,
        MatButtonModule,
        MatIconModule
      ],
      providers:[
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: GlobalRestService, useValue: restServiceSpy},
        { provide: CartService, useValue: cartServiceSpy },
        provideMockStore({
          initialState: { cart: cartInitialStateMock },
          selectors: cartSelectorsMock,
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    store = TestBed.inject(MockStore);
    debug = fixture.debugElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
    matDialog = TestBed.inject(MatDialog)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
