import { MatIconModule } from '@angular/material/icon';
import { CartService } from './../shared/services/cart.service';
import { LikeService } from './../shared/services/like.service';
import { GlobalRestService } from './../core/services/global-rest.service';
import { MatButtonModule } from '@angular/material/button';
import { ProductDialogModule } from './../shared/product-dialog/product-dialog.module';
import { PaginationModule } from './../shared/pagination/pagination.module';
import { CartRoutingModule } from './cart.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    PaginationModule,
    ProductDialogModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CartComponent
  ],
  providers:[
    GlobalRestService,
    LikeService,
    CartService
  ]
})
export class CartModule { }
