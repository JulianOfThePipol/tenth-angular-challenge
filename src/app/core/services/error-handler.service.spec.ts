import { TestBed } from '@angular/core/testing';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService,
      snackBar: SnackbarService;

  beforeEach(() => {

    const snackBarSpy = jasmine.createSpyObj('SnackbarService',['openSnackBarWarning'])
    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        {
          provide: SnackbarService, useValue: snackBarSpy
        }
      ]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
