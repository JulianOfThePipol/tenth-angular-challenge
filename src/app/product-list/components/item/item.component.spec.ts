import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { capitalize } from 'src/app/helper/helper.functions';
import { productMock } from 'src/app/mocks/data.mock';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent,
    fixture: ComponentFixture<ItemComponent>,
    debug: DebugElement,
    matDialog: MatDialog;

  beforeEach(async () => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
      imports: [MatDialogModule, MatCardModule, MatIconModule],
      providers: [{ provide: MatDialog, useValue: matDialogSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    matDialog = TestBed.inject(MatDialog)
    debug = fixture.debugElement;
    component = fixture.componentInstance;
    component.product = productMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title according to product and capitalized', () => {
    const title = debug.query(By.css('h2'));
    expect(title.nativeElement.innerText).toBe(capitalize(productMock.name));
  });

  it('should display category according to product and capitalized', () => {
    const category = debug.query(By.css('#category'));
    expect(category.nativeElement.innerText).toBe(`Category: ${capitalize(productMock.category?.name as string)}`);
  });

  it('should display description according to product', () => {
    const description = debug.query(By.css('#description'));
    expect(description.nativeElement.innerText).toBe(productMock.description);
  });

  it('should have proper img', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.src).toBe(productMock.image?.url);
  });

  it('should display the likes and dislikes count', () => {
    const likes = debug.query(By.css('#like'))
    const dislikes = debug.query(By.css('#dislike'))
    expect(dislikes.nativeElement.innerText).toContain(productMock.likes_down_count);
    expect(likes.nativeElement.innerText).toContain(productMock.likes_up_count);
  });

  it('should open dialog on card click', () => {
    let card = debug.query(By.css('mat-card'));
    card.nativeElement.click();
    expect(matDialog.open).toHaveBeenCalledTimes(1);
  });

  
});
