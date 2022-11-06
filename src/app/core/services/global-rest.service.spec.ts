import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GlobalRestService } from './global-rest.service';

describe('GlobalRestService', () => {
  let service: GlobalRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalRestService
      ],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GlobalRestService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
