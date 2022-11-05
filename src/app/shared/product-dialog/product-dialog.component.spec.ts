import { ProductDialogComponent } from './product-dialog.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LikeService } from '../services/like.service';
import { CartService } from './../services/cart.service';

import { productMock } from 'src/app/mocks/data.mock';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  cartInitialStateMock,
  cartSelectorsMock,
} from 'src/app/mocks/stores/cart.store.mock';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';

import { capitalize } from 'src/app/helper/helper.functions';

describe('ProductDialogComponent', () => {
  let component: ProductDialogComponent,
    fixture: ComponentFixture<ProductDialogComponent>,
    cartService: CartService,
    likeService: LikeService,
    store: MockStore,
    debug: DebugElement,
    loader: HarnessLoader;

  beforeEach(async () => {
    const cartServiceSpy = jasmine.createSpyObj('CartService', [
      'addItemToCart',
      'removeItemFromCart',
    ]);
    const likeServiceSpy = jasmine.createSpyObj('LikeService', ['likeProduct']);
    await TestBed.configureTestingModule({
      declarations: [ProductDialogComponent],
      imports: [
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule,
        MatDialogModule,
      ],
      providers: [
        { provide: CartService, useValue: cartServiceSpy },
        { provide: LikeService, useValue: likeServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: productMock },
        { provide: MatDialogRef, useValue: productMock },
        provideMockStore({
          initialState: { cart: cartInitialStateMock },
          selectors: cartSelectorsMock,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDialogComponent);
    debug = fixture.debugElement;
    component = fixture.componentInstance;
    store =
      TestBed.inject(
        MockStore
      ); /* It should be considered that the mocked store has the current item in its cart. In order to test negative paths, its necessary to change the cart item's id */
    cartService = TestBed.inject(CartService);
    likeService = TestBed.inject(LikeService);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title according to product and capitalized', () => {
    const title = debug.query(By.css('h2'));
    expect(title.nativeElement.innerText).toBe(capitalize(productMock.name));
  });

  it('should display category according to product and capitalized', () => {
    const category = debug.query(By.css('#category'));
    expect(category.nativeElement.innerText).toBe(
      `Category: ${capitalize(productMock.category.name)}`
    );
  });

  it('should display description according to product', () => {
    const description = debug.query(By.css('#description'));
    expect(description.nativeElement.innerText).toBe(productMock.description);
  });

  it('should have proper img', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.src).toBe(productMock.image?.url);
  });

  it('should rate product on clicking like', () => {
    const likeButton = debug.query(By.css('#like-button'));
    likeButton.nativeElement.click();
    expect(likeService.likeProduct).toHaveBeenCalledWith('up', productMock.id);
  });

  it('should rate product on clicking dislike', () => {
    const dislikeButton = debug.query(By.css('#dislike-button'));
    dislikeButton.nativeElement.click();
    expect(likeService.likeProduct).toHaveBeenCalledWith(
      'down',
      productMock.id
    );
  });

  it('should show addProduct section if there is stock', () => {
    /* The starting product has stock */
    const addProductDiv = debug.query(By.css('#add-product'));
    expect(addProductDiv).toBeTruthy();
  });

  it('should show removeProduct section if the item is in the cart', () => {
    /* The cart in the store's id is the same as the current product */
    const removeProductDiv = debug.query(By.css('#remove-product'));
    expect(removeProductDiv).toBeTruthy();
  });

  it('shouldnt show addProduct section if there is no stock', () => {
    component.product.master.stock = 0;
    fixture.detectChanges();
    const addProductDiv = debug.query(By.css('#add-product'));
    expect(addProductDiv).toBeFalsy();
    component.product.master.stock = 55; /* changing stock to original value */
  });

  it('shouldnt show removeProduct section if the product isnt in the cart', () => {
    component.cartItem = null;
    fixture.detectChanges();
    const removeProductDiv = debug.query(By.css('#remove-product'));
    expect(removeProductDiv).toBeFalsy();
    component.cart = cartInitialStateMock;
  });

  it('should enable addButton if input has value', async () => {
    const addProductDiv = await loader.getChildLoader('#add-product');
    const addButton = await addProductDiv.getHarness(MatButtonHarness);
    const addInput = await addProductDiv.getHarness(MatInputHarness);
    await addInput.setValue('2');
    expect(await addButton.isDisabled()).toBeFalse();
  });

  it('should enable removeButton if input has value lesser or equal than the amount in the cart', async () => {
    const removeProductDiv = await loader.getChildLoader('#remove-product');
    const removeButton = await removeProductDiv.getHarness(MatButtonHarness);
    const removeInput = await removeProductDiv.getHarness(MatInputHarness);
    await removeInput.setValue(`${component.cartItem?.quantity}`);
    expect(await removeButton.isDisabled()).toBeFalse();
  });

  it('shouldnt allow removeButton if input amount is more than current item quantity cart', async () => {
    const removeProductDiv = await loader.getChildLoader('#remove-product');
    const removeButton = await removeProductDiv.getHarness(MatButtonHarness);
    const removeInput = await removeProductDiv.getHarness(MatInputHarness);
    await removeInput.setValue(
      `${(component.cartItem?.quantity as number) + 1}`
    );
    expect(await removeButton.isDisabled()).toBeTrue();
  });

  it('should add items to cart on valid addButton click', async () => {
    const addProductDiv = await loader.getChildLoader('#add-product');
    const addButton = await addProductDiv.getHarness(MatButtonHarness);
    const addInput = await addProductDiv.getHarness(MatInputHarness);
    await addInput.setValue('2');
    await addButton.click();
    expect(cartService.addItemToCart).toHaveBeenCalledOnceWith(
      (component.cartItem?.quantity as number) + 2,
      component.product.id,
      component.cartItem?.id,
      component.cart.total_items
    );
  });

  it('should remove items from cart on valid removeButton click if removal quantity equals item quantity in cart', async () => {
    /* Due to the api is internal logic, there are 2 flows when removing items. */
    const removeProductDiv = await loader.getChildLoader('#remove-product');
    const removeButton = await removeProductDiv.getHarness(MatButtonHarness);
    const removeInput = await removeProductDiv.getHarness(MatInputHarness);
    await removeInput.setValue(`${component.cartItem?.quantity}`);
    await removeButton.click();
    expect(cartService.removeItemFromCart).toHaveBeenCalledOnceWith(
      component.cartItem?.id as number,
      component.cart.items.length
    );
  });

  it('should remove items from cart on valid removeButton click if removal quantity is less than item quantity in cart', async () => {
    const removeProductDiv = await loader.getChildLoader('#remove-product');
    const removeButton = await removeProductDiv.getHarness(MatButtonHarness);
    const removeInput = await removeProductDiv.getHarness(MatInputHarness);
    component.cartItem!.quantity = 4;
    let amount = (component.cartItem?.quantity as number) - 1
    fixture.detectChanges();
    await removeInput.setValue(
      `${amount}`
    );
    console.log(await removeInput.getValue())
    await removeButton.click();
    expect(cartService.addItemToCart).toHaveBeenCalledOnceWith(
      (component.cartItem?.quantity as number - amount),
      component.product.id,
      component.cartItem?.id,
      component.cart.total_items
    );
  });
});
