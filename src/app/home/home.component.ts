import { Category, Product } from './../models/rest.models';
import { HomeRestService } from './home-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentProducts: Product[] = [];
  currentSearch = "";
  currentCategory:Category | null = null;
  currentPage: number = 1;
  totalPages!: number;
  constructor(
    private restService: HomeRestService
  ) { }

  ngOnInit(): void {
    this.changeProducts(1, "", "");
  }

  changeCategory (event:Category | null){
    this.currentCategory = event;
    this.currentPage = 1;
    this.changeProducts(1, this.currentSearch, this.currentCategory?.id || "");
  }

  changeSearch (event: string) {
    this.currentSearch = event;
    this.currentPage = 1;
      this.changeProducts(1, this.currentSearch, this.currentCategory?.id || "");
  }

  changeProducts (page:number, searchValue:string, category_id: string) {
    this.restService.getProducts(page, searchValue, category_id).subscribe({
      next: response => {
        this.currentProducts = response.data;
        this.totalPages = response.meta.last_page;
      }
    })
  }

  changePage (page:number) {
    this.currentPage = page;
    this.changeProducts(page, this.currentSearch, this.currentCategory?.id || "");
  } 
}
