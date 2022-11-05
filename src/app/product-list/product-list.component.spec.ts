import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockProducts } from '../mocks/data.mock';
import { ItemComponentMock } from '../mocks/item.component.mock';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductListComponent,
        ItemComponentMock
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
    debug = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create as many product-component items as products', () => {
    component.products = mockProducts.data;
    fixture.detectChanges();
    let products = debug.queryAll(By.css('app-item'));
    expect(products.length).toBe(mockProducts.data.length)
  })
});
