import { TestBed } from '@angular/core/testing';
import { GlobalRestService } from '../core/services/global-rest.service';

import { CategoriesRestService } from './categories-rest.service';

fdescribe('CategoriesRestService', () => {
  let service: CategoriesRestService,
      restService: GlobalRestService;

  beforeEach(() => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', ['getCategories'])
    TestBed.configureTestingModule({
      providers: [
        CategoriesRestService,
        {provide: GlobalRestService, useValue: restServiceSpy}
      ]
    });
    service = TestBed.inject(CategoriesRestService);
    restService = TestBed.inject(GlobalRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
