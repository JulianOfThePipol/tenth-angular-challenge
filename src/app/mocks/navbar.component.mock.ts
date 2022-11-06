import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: '<p>Mock HTML</p>'
})
export class NavbarComponentMock {
  @Input() itemsAmount = 0;
}
