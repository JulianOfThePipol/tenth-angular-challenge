import { CategoriesComponentMock } from './mocks/categories.component.mock';
import { routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';




fdescribe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
        ],
      declarations: [CategoriesComponentMock],

    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(CategoriesComponentMock);
    fixture.detectChanges();
 
  });

  it('navigate to "" redirects you to /main', async() => {
    await router.navigate([''])
    
/*     const loadChildrenSpy = jasmine.createSpy('loadChildren');

    router.navigate(['']);
    tick();
    console.log(location.path());
    expect(loadChildrenSpy).toHaveBeenCalled(); */

  });
});
