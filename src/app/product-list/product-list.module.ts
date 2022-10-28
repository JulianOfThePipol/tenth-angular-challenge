import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ItemComponent } from './components/item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ItemComponent,
    ProductDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [ProductListComponent],
})
export class ProductListModule {}
