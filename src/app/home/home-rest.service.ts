import { GlobalRestService } from './../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeRestService {

  constructor(
    private restService: GlobalRestService
  ) { }

    getProducts (page:number,  search:string, category_id:string) {
      return this.restService.searchProducts(page, 10, search, category_id)
    }


}
