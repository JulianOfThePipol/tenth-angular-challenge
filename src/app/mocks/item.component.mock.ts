import { Component, Input } from '@angular/core';
import { Product } from '../models/rest.models';
@Component({
  selector: 'app-item',
  template: '<p>Mock HTML</p>',
})
export class ItemComponentMock {
  @Input() product!: Product;
  @Input() likeShown: boolean = false;
}