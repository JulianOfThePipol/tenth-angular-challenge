import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenService } from 'src/app/core/services/token.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let tokenService: TokenService;
  let router: Router;
  beforeEach(async () => {
    const tokenServiceSpy = jasmine.createSpyObj('TokenService', ['deleteToken'])
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers:[
        {provide: TokenService, useValue: tokenServiceSpy}
      ],
      imports: [
        MatToolbarModule,
        RouterTestingModule,
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    tokenService = TestBed.inject(TokenService);
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
