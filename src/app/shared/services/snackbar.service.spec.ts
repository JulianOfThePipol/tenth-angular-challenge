import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Injectable, NgZone } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { of } from 'rxjs';

xdescribe('SnackbarService', () => {
  let service: SnackbarService,
      zone: NgZone;

  beforeEach(() => {
    const ngZoneSpy = jasmine.createSpyObj('NgZone', {
      run: () => {}
    });
    ngZoneSpy
    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        {provide:NgZone, useValue: ngZoneSpy}
      ],
      imports: [
        MatSnackBarModule
      ]
    });
    service = TestBed.inject(SnackbarService);
    zone = TestBed.inject(NgZone);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
