import { GlobalRestService } from './../core/services/global-rest.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CategoriesComponent } from './categories.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DebugElement } from '@angular/core';
import { getCategoriesResponseMock } from '../mocks/data.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { initialStateCategoriesMock } from '../mocks/stores/categories.store.mock';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent,
      fixture: ComponentFixture<CategoriesComponent>,
      store: MockStore,
      debug: DebugElement;

  beforeEach(async () => {
    const restServiceSpy = jasmine.createSpyObj('GlobalRestService', [
      'getCategories'
    ])
    restServiceSpy.getCategories.and.returnValue(of(getCategoriesResponseMock))
    await TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      imports: [
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule
      ],
      providers:[
        provideMockStore({
          initialState: {categories: initialStateCategoriesMock}
        }),
        { provide: GlobalRestService, useValue: restServiceSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  
  });
});
