import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { CategoriesComponent } from './categories.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DebugElement } from '@angular/core';
import { getCategoriesResponseMock } from '../mocks/data.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { initialStateCategoriesMock } from '../mocks/stores/categories.store.mock';
import { CategoriesRestService } from './categories-rest.service';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { By } from '@angular/platform-browser';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent,
      fixture: ComponentFixture<CategoriesComponent>,
      store: MockStore,
      debug: DebugElement,
      restService: CategoriesRestService,
      loader: HarnessLoader;


  beforeEach(async () => {
    const restServiceSpy = jasmine.createSpyObj('CategoriesRestService', [
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
        { provide: CategoriesRestService, useValue: restServiceSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    restService = TestBed.inject(CategoriesRestService)
    store = TestBed.inject(MockStore);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the first five categories as buttons on init', async () => {
    const container = await loader.getChildLoader('.chip-container');
    const categoryButton = await container.getAllHarnesses(MatButtonHarness);
    expect(categoryButton.length).toBe(5);
    categoryButton.map(async ( category, index )=>{
      let name = await category.getText();
      expect(name).toBe(component.currentCategories[index].name);
    });
  });

  it('should emit category on button click', () => {
    spyOn(component.categoryEmitter, 'emit');
    const categoryButton = debug.queryAll(By.css('.category-button'));
    categoryButton.map(( category, index )=>{
      category.nativeElement.click();
      expect(component.categoryEmitter.emit).toHaveBeenCalledWith(component.currentCategories[index]);
    });
  })

  it('should show next five buttons on next click', () => {
    const nextButton = debug.query(By.css('#next'));
    nextButton.nativeElement.click();
    fixture.detectChanges();
    const categoryButton = debug.queryAll(By.css('.category-button'));
    categoryButton.map((category, index) => {
      let name = category.nativeElement.innerText;
      expect(name).toBe(component.categories[index+5].name)
    });
  })

  it('should change current page and categories on page change', () => { /* Redundant */
    component.changeCurrent(3);
    expect(component.currentPage).toBe(3);
    expect(component.currentCategories).toEqual(component.categories.slice(10,15))
  })

});
