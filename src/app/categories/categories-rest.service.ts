import { GlobalRestService } from './../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesRestService {

  constructor(
    private restService: GlobalRestService
  ) { }

  getCategories() {
    return this.restService.getCategories()
  }
}
