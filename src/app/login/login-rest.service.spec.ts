import { TestBed } from '@angular/core/testing';
import { GlobalRestService } from '../core/services/global-rest.service';

import { LoginRestService } from './login-rest.service';

describe('LoginRestService', () => {
  let service: LoginRestService, restService: GlobalRestService;

  beforeEach(() => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', ['login']);
    TestBed.configureTestingModule({
      providers: [
        LoginRestService,
        { provide: GlobalRestService, useValue: restServiceSpy },
      ],
    });
    service = TestBed.inject(LoginRestService);
    restService = TestBed.inject(GlobalRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
