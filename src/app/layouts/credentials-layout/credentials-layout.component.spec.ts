import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsLayoutComponent } from './credentials-layout.component';

describe('CredentialsLayoutComponent', () => {
  let component: CredentialsLayoutComponent;
  let fixture: ComponentFixture<CredentialsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
