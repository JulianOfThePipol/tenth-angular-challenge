import { TestBed } from '@angular/core/testing';
import { GlobalRestService } from '../core/services/global-rest.service';

import { HomeRestService } from './home-rest.service';

describe('HomeRestService', () => {
  let service: HomeRestService;
  let restService: GlobalRestService

  beforeEach(() => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', ['searchProducts'])

    TestBed.configureTestingModule({
      providers:[
        HomeRestService,
        {provide: GlobalRestService, useValue: restServiceSpy}
      ]
    });
    service = TestBed.inject(HomeRestService);
    restService = TestBed.inject(GlobalRestService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
