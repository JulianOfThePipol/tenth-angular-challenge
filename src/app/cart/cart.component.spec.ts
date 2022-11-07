import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GlobalRestService } from '../core/services/global-rest.service';
import {
  cartInitialStateMock,
  cartSelectorsMock,
} from '../mocks/stores/cart.store.mock';
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
      'getSingleProductWithId',
    ]);
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [MatTableModule, MatButtonModule, MatIconModule],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: GlobalRestService, useValue: restServiceSpy },
        { provide: CartService, useValue: cartServiceSpy },
        provideMockStore({
          initialState: { cart: cartInitialStateMock },
          selectors: cartSelectorsMock,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    store = TestBed.inject(MockStore);
    debug = fixture.debugElement;
    loader = TestbedHarnessEnvironment.loader(fixture);
    matDialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a cart an items amount from store', () => {
    expect(component.itemsAmount).toBeTruthy();
    expect(component.cart).toBeTruthy();
  });

  it('should have as many rows as items in cart', () => {
    const tableRows = debug.queryAll(By.css('tr')).slice(1);
    const cartItemsAmount = component.cart.items.length;
    expect(tableRows.length).toBe(
      cartItemsAmount
    ); /* Table header is also a tr */
  });

  it('should display total', () => {
    const total = component.cart.total_items;
    const displayedTotal = debug.query(By.css('#total')).nativeElement
      .innerText;
    expect(displayedTotal).toContain(total);
  });

  it('should display each row with proper info', () => {
    const tableRows = debug.queryAll(By.css('tr')).slice(1);
    const cartItems = component.cart.items;
    tableRows.map((row, index) => {
      let currentItem = cartItems[index];
      let rowQuantity = tableRows[index].nativeElement.childNodes[0].innerText;
      let rowName = tableRows[index].nativeElement.childNodes[1].innerText;
      let rowDescription =
        tableRows[index].nativeElement.childNodes[2].innerText;
      let rowPrice = tableRows[index].nativeElement.childNodes[3].innerText;
      let rowTotal = tableRows[index].nativeElement.childNodes[4].innerText;
      expect(parseInt(rowQuantity)).toBe(currentItem.quantity);
      expect(rowName).toBe(currentItem.name?.trim());
      expect(rowDescription).toBe(currentItem.description);
      expect(rowPrice.slice(1)).toBeCloseTo(
        parseFloat(currentItem.price as string)
      );
      expect(rowTotal.slice(1)).toBeCloseTo(
        parseFloat(currentItem.total as string)
      );
    });
  });

  it('should call remove item from cart on remove button click', () => {
    const tableRow = debug.queryAll(By.css('tr'))[1];
    const removeButton = tableRow.nativeElement.childNodes[6].childNodes[0];
    removeButton.click();
    fixture.detectChanges();
    expect(cartService.removeItemFromCart).toHaveBeenCalled();
  });
});
