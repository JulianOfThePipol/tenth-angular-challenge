import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Injectable, NgZone } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { of } from 'rxjs';
import { Status } from 'src/app/mocks/status-snackbar.mock';

fdescribe('SnackbarService', () => {
  let service: SnackbarService,
      snackbar: MatSnackBar;

      const mockMatSnackBar = {
        open: () => {}
      };
    
      const mockStatus = {
        default: ''
      };

  beforeEach(() => {
    const ngZoneSpy = jasmine.createSpyObj('NgZone', ['run']);
    ngZoneSpy.run.and.returnValue(of(true))
    ngZoneSpy
    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        { provide: MatSnackBar, useValue: mockMatSnackBar },
        { provide: Status, useValue: mockStatus },
      ],
      imports: [
        MatSnackBarModule
      ]
    });
    service = TestBed.inject(SnackbarService);
    snackbar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call snackbar warning with proper message and config', () => {
    const matSnackBarSpy = spyOn(snackbar, 'open').and.stub();
    let mockMessage = 'mock example';
    service.openSnackBarWarning(mockMessage);
    expect(matSnackBarSpy.calls.count()).toBe(1);
    const actualMatSnackbar = matSnackBarSpy.calls.allArgs()[0];
    expect(actualMatSnackbar[0]).toBe(mockMessage);
    expect(actualMatSnackbar[2]).toEqual({
      duration: 3000,
      panelClass: ['red-snackbar', 'warn-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    })
  })

  it('should call snackbar success with proper message and config', () => {
    const matSnackBarSpy = spyOn(snackbar, 'open').and.stub();
    let mockMessage = 'mock example';
    service.openSnackBarSuccess(mockMessage);
    expect(matSnackBarSpy.calls.count()).toBe(1);
    const actualMatSnackbar = matSnackBarSpy.calls.allArgs()[0];
    expect(actualMatSnackbar[0]).toBe(mockMessage);
    expect(actualMatSnackbar[2]).toEqual({
      duration: 3000,
      panelClass: ['green-snackbar', 'success-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    })
  })
});
