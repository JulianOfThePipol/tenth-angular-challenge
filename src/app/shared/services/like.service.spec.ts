import { TestBed } from '@angular/core/testing';
import { GlobalRestService } from 'src/app/core/services/global-rest.service';

import { LikeService } from './like.service';
import { SnackbarService } from './snackbar.service';

describe('LikeService', () => {
  let service: LikeService,
      restService: GlobalRestService,
      snackbar: SnackbarService;

  beforeEach(() => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', ['getProductLiked', 'rateProduct']);
    const snackbarServiceSpy = jasmine.createSpyObj('SnackbarService', ['openSnackBarSuccess'])
    TestBed.configureTestingModule({
      providers: [
        LikeService,
        { provide: GlobalRestService, useValue: restServiceSpy },
        { provide: SnackbarService, useValue: snackbarServiceSpy }
      ]
    });
    service = TestBed.inject(LikeService);
    restService = TestBed.inject(GlobalRestService);
    snackbar = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
