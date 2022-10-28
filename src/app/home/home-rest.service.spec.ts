import { TestBed } from '@angular/core/testing';

import { HomeRestService } from './home-rest.service';

describe('HomeRestService', () => {
  let service: HomeRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
