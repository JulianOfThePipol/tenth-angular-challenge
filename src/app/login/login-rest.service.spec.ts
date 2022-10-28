import { TestBed } from '@angular/core/testing';

import { LoginRestService } from './login-rest.service';

describe('LoginRestService', () => {
  let service: LoginRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
