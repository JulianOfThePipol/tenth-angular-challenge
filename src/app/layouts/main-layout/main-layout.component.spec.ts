import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FooterComponentMock } from 'src/app/mocks/footer.component.mock';
import { NavbarComponentMock } from 'src/app/mocks/navbar.component.mock';
import { cartInitialStateMock, cartSelectorsMock } from 'src/app/mocks/stores/cart.store.mock';

import { MainLayoutComponent } from './main-layout.component';
import { MainRestService } from './main-rest.service';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent,
      fixture: ComponentFixture<MainLayoutComponent>,
      restService: MainRestService,
      store: MockStore,
      router: Router;

  beforeEach(async () => {
    const restServiceSpy = jasmine.createSpyObj('MainRestService',['getCart'])
    await TestBed.configureTestingModule({
      declarations: [ 
        MainLayoutComponent,
        NavbarComponentMock,
        FooterComponentMock
       ],
      providers: [
          {provide: MainRestService, useValue: restServiceSpy},
          provideMockStore({
            initialState: { cart: cartInitialStateMock },
            selectors: cartSelectorsMock, 
          }),
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutComponent);
    restService = TestBed.inject(MainRestService);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
