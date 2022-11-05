
import { Product } from './../models/rest.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: '<p>Mocked HTML</p>'
})
export class ProductListComponentMock {
  @Input() products: Product[] = []
}
