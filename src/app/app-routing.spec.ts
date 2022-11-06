import { AppRoutingModule, routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { By } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CredentialsLayoutModule } from './layouts/credentials-layout/credentials-layout.module';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { MainLayoutModuleMock } from './mocks/main.module.mock';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let ngModule: any;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AppModule
        ],
      declarations: [
        AppComponent,
      ],
      providers: [
        NgModule
      ]
    });
    ngModule = TestBed.inject(NgModule);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
 
  });

  it('navigate to "" redirects you to /main', async() => {
    await router.navigate(['']);
    expect(location.path()).toBe('/main');
  });

  it('navigate to "credentials" loads login', async() => {
    await router.navigate(['/credentials']);
    const login = fixture.debugElement.query(By.css('app-login'))
    expect(location.path()).toBe('/credentials');
    expect(login).toBeTruthy();
  });

  it('navigate to "main" loads home', async() => {
    await router.navigate(['/main']);
    const home = fixture.debugElement.query(By.css('app-home'))
    expect(location.path()).toBe('/main');
    expect(home).toBeTruthy();
  });

  it('navigate to "main/cart" loads cart', async() => {
    await router.navigate(['/main/cart']);
    const cart = fixture.debugElement.query(By.css('app-cart'))
    expect(location.path()).toBe('/main/cart');
    expect(cart).toBeTruthy();
  });

  
/*   it('Lazy loading test case', fakeAsync(() => {  The solution seems to be creating a mock of the modules. Currently ngSpyFactory is deprecated, so this is an attempt with the new implementation. Doesnt work, it has still catches the component. 

    ngModule.stubbedModules = {
      lazyMainModule:MainLayoutModuleMock,
      lazyCredentialsModule:CredentialsLayoutModule
    };
    router.navigateByUrl('');
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/main');
 })); 
 */

});
