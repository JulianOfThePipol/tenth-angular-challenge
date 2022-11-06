import { ProductDialogComponent } from './../../../shared/product-dialog/product-dialog.component';
import { Product } from '../../../models/rest.models';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() product!: Product;
  @Input() likeShown: boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog(data: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: data,
      scrollStrategy: new NoopScrollStrategy(),
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '800ms'
      
    });
  }
}
