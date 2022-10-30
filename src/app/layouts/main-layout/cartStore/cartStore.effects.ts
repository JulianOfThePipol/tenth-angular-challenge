import { cartFromStore } from './cartStore.selectors';
import { Store } from '@ngrx/store';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { GlobalRestService } from './../../../core/services/global-rest.service';
import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addItem,
  addFirstItem,
  setCart,
  changeItemQuantity,
  removeItem,
  deleteCart,
} from './cartStore.actions';
import {
  concatMap,
  map,
  catchError,
  throwError,
  tap,
  of,
  take,
  Observable,
} from 'rxjs';
import { Cart } from 'src/app/models/rest.models';

@Injectable()
export class CartEffects {
  addFirstItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFirstItem),
      concatMap((action) => {
        this.snapshot = action.previousState;
        return this.restService.uploadCart([action.item]);
      }),
      map((response) => {
        this.snackBarService.openSnackBarSuccess('Item/s Added Succesfully');
        return setCart({ cart: response.data });
      }),
      catchError((error) => {
        this.snackBarService.openSnackBarWarning(
          "An error has ocurred while adding an item. Please try again"
        );
        return of(setCart({ cart: this.snapshot }));
      })
    )
  );

  addNewItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      concatMap((action) => {
        this.snapshot = action.previousState;
        return this.restService.addNewItemToCart([action.item]);
      }),
      map((response) => {
        this.snackBarService.openSnackBarSuccess('Item/s Added Succesfully');
        return setCart({ cart: response.data });
      }),
      catchError((error) => {
        this.snackBarService.openSnackBarWarning(
          "An error has ocurred while adding an item. Please try again"
        );
        return of(setCart({ cart: this.snapshot }));
      })
    )
  );

  changeItemQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeItemQuantity),
      concatMap((action) => {
        this.snapshot = action.previousState;
        return this.restService.changeItemQuantityCart(
          action.item,
          action.cartItemId
        );
      }),
      map((response) => {
        console.log(this.snapshot);
        this.snackBarService.openSnackBarSuccess(
          'Item Quantity Modified Succesfully'
        );
        return setCart({ cart: response.data });
      }),

      catchError((error) => {
        this.snackBarService.openSnackBarWarning(
          "An error has ocurred while changing the item's quantities. Please try again"
        );
        return of(setCart({ cart: this.snapshot }));
      })
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeItem),
      concatMap((action) => {
        this.snapshot = action.previousState;
        return this.restService.removeItemCart(action.cartItemId);
      }),
      map((response) => {
        this.snackBarService.openSnackBarSuccess(
          'Item Fully Removed From Your Cart'
        );
        return setCart({ cart: response.data });
      }),
      catchError((error) => {
        this.snackBarService.openSnackBarWarning(
          'There has been an error deleting the item. Please try again'
        );
        throwError(() => new Error(error))
        return of(setCart({ cart: this.snapshot }));
      })
    )
  );

  deleteCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteCart),
        concatMap((action) => {
          this.snapshot = action.previousState;
          return this.restService.deleteCart();
        }),
        tap((response) => {
          this.snackBarService.openSnackBarSuccess(
            'No Items Left In Your Cart'
          );
        }),
        catchError((error) => {
          this.snackBarService.openSnackBarWarning(
            'There has been an error deleting your last item. Please try again'
          );
          return of(setCart({ cart: this.snapshot }));
        })
      ),
    { dispatch: false }
  );

  snapshot!: Cart;
  constructor(
    private actions$: Actions,
    private restService: GlobalRestService,
    private snackBarService: SnackbarService,
  ) {}
}
