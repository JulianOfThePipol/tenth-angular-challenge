import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  @Output() searchEmitter = new EventEmitter<string>();
  @Input() searchValue = ''
  emitSearch (event:string) {
    this.searchEmitter.emit(event.trim())
  }
}
