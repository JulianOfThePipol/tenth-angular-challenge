import { categoryMock } from './../mocks/data.mock';
import { pageValueMock, PaginationComponentMock } from './../mocks/pagination.component.mock';
import { ProductListComponentMock } from './../mocks/product-list.component.mock';
import { CategoriesComponentMock } from './../mocks/categories.component.mock';
import { SearchComponentMock, searchValueMock } from './../mocks/search.component.mock';
import { DebugElement } from '@angular/core';


import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { HomeRestService } from './home-rest.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { mockProducts } from '../mocks/data.mock';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent,
      fixture: ComponentFixture<HomeComponent>,
      restService: HomeRestService,
      debug: DebugElement;
  
  beforeEach(async () => {
    const restServiceSpy = jasmine.createSpyObj('restHomeService',{
      getProducts: of(mockProducts)
    });

    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CategoriesComponentMock,
        SearchComponentMock,
        ProductListComponentMock,
        PaginationComponentMock
      
      ],
      providers: [{ provide: HomeRestService, useValue: restServiceSpy }],
      imports: [
        
        NoopAnimationsModule,
        MatButtonModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    debug = fixture.debugElement;
    restService = TestBed.inject(HomeRestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create component Categories', () => {
    let categories = debug.query(By.css('app-categories'));
    expect(categories).toBeTruthy();
  });

  it('should create component Pagination', () => {
    let pagination = debug.query(By.css('app-pagination'));
    expect(pagination).toBeTruthy();
  });

  it('should create component ProductList', () => {
    let productList = debug.query(By.css('app-product-list'));
    expect(productList).toBeTruthy();
  });

  it('should create component Search', () => {
    let search = debug.query(By.css('app-search'));
    expect(search).toBeTruthy();
  });

  it('should get products on search', () => {
    let searchButton = debug.query(By.css('#mock-button-search'))
    searchButton.triggerEventHandler('click');
    expect(restService.getProducts).toHaveBeenCalledWith(1,searchValueMock,'');/* The search should always start in the first page, with no category (unless explicitly selected) */
  })

  it('should get products on category change', () => {
    let categoriesButton = debug.query(By.css('#mock-button-categories'))
    categoriesButton.triggerEventHandler('click');
    expect(restService.getProducts).toHaveBeenCalledWith(1,'', categoryMock.id);/* The search should always start in the first page, with no search (unless there is a current search). The id */
  })

  it('should get products on page change', () => {
    let paginationButton = debug.query(By.css('#mock-button-pagination'))
    paginationButton.triggerEventHandler('click');
    expect(restService.getProducts).toHaveBeenCalledWith(pageValueMock,'', '');
  })

  it('should change page and category on category change', () => { /* This and the next two tests seem redundant, as the flow for the search, the category and the page change has already been tested on the previous one */
    component.changeCategory(categoryMock);
    fixture.detectChanges();
    expect(component.currentCategory).toBe(categoryMock);
    expect(component.currentPage).toBe(1);
    expect(component.currentSearch).toBe('')
  })

  it('should change page and category on search', () => {
    component.changeSearch(searchValueMock);
    fixture.detectChanges();
    expect(component.currentCategory).toBe(null);
    expect(component.currentPage).toBe(1);
    expect(component.currentSearch).toBe(searchValueMock)
  })

  it('should change page on page change', () => {
    component.changePage(pageValueMock);
    fixture.detectChanges();
    expect(component.currentCategory).toBe(null);
    expect(component.currentPage).toBe(pageValueMock);
    expect(component.currentSearch).toBe('')
  })
  

});
