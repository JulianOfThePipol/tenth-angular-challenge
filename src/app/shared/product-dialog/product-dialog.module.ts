import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CartService } from './../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductDialogComponent } from './product-dialog.component';
import { NgModule } from '@angular/core';




@NgModule ({
  declarations: [
    ProductDialogComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    CartService
  ],
  exports: [
    ProductDialogComponent
  ]
})
export class ProductDialogModule { }
