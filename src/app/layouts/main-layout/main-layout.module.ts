import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './cartStore/cartStore.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-layout.routing';

import { MainRestService } from './main-rest.service';

import { StoreModule } from '@ngrx/store';
import * as fromCart from './cartStore/carstStore.reducers';

import { MainLayoutComponent } from './main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MainLayoutComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    StoreModule.forFeature(
      fromCart.cartFeatureKey, 
      fromCart.cartReducers
      ),
    EffectsModule.forFeature([CartEffects]),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [MainRestService],
})
export class MainLayoutModule {}
