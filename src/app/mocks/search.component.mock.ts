import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: '<button id="mock-button-search" (click)="emitSearch()">Mocked HTML</button>'
})
export class SearchComponentMock {
  @Input() searchValue = ''
  @Output() searchEmitter = new EventEmitter<string>();
  emitSearch () {
    this.searchEmitter.emit(searchValueMock)
  }
}

export const searchValueMock = "testValue"