import { TestBed } from '@angular/core/testing';

import { CategoriesRestService } from './categories-rest.service';

describe('CategoriesRestService', () => {
  let service: CategoriesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
