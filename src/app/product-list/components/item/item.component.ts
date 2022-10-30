import { ProductDialogComponent } from './../../../shared/product-dialog/product-dialog.component';
import { Product } from '../../../models/rest.models';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() likeShown: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(data: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: data,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }
}
