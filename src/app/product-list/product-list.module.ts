import { ProductDialogModule } from './../shared/product-dialog/product-dialog.module';
import { LikeService } from './../shared/services/like.service';
import { CartService } from './../shared/services/cart.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { ItemComponent } from './components/item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    
    ProductDialogModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [ProductListComponent],
  providers: [CartService, LikeService],
})
export class ProductListModule {}
