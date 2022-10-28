import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();



  constructor() { }

  ngOnInit(): void {
  }


  emitSearch (event:string) {
    this.searchEmitter.emit(event.trim())
  }
}
