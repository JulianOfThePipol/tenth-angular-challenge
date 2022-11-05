import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockProducts } from './data.mock';

@Injectable()
export class HomeRestServiceMock {
    getProducts(page: number, search: string, category_id: string) {
        return of(
            mockProducts
        )
      }
}


