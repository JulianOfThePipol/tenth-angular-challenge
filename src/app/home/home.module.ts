import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from './../shared/pagination/pagination.module';
import { ProductListModule } from './../product-list/product-list.module';
import { SearchModule } from './../search/search.module';
import { CategoriesModule } from './../categories/categories.module';
import { HomeRestService } from './home-rest.service';
import { HomeRoutingModule } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoriesModule,
    SearchModule,
    ProductListModule,
    PaginationModule,

    MatButtonModule
  ],
  providers: [
    HomeRestService
  ]
})
export class HomeModule { }
