import { TokenService } from './../../core/services/token.service';
import { MainRestService } from './main-rest.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']

})
export class MainLayoutComponent implements OnInit {

  constructor(
    private restService: MainRestService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.restService.getCart()
    }
  }
}
