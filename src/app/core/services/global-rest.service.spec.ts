import { TestBed } from '@angular/core/testing';

import { GlobalRestService } from './global-rest.service';

describe('GlobalRestService', () => {
  let service: GlobalRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
