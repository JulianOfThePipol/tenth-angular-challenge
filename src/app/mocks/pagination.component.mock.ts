import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-pagination',
  template: '<button id="mock-button-pagination" (click)="changeCurrentPage()">Mocked HTML</button>',
})
export class PaginationComponentMock {
@Output() currentPageEmitter = new EventEmitter<number>();

  @Input() set pages(pages: number) {
    for (let i = 1; i <= pages; i++) {
      this.pagesArray.push(i);
    }
  }
  @Input() currentPage: number = 0;
  pagesArray: number[] = [];

  changeCurrentPage() {
    this.currentPageEmitter.emit(pageValueMock);
  }
}

export const pageValueMock = 2
