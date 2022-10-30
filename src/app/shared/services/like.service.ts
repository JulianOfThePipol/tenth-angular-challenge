import { SnackbarService } from './snackbar.service';
import { GlobalRestService } from './../../core/services/global-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LikeService {

  constructor(
    private restService: GlobalRestService,
    private snackbarService: SnackbarService
    ) { }

    getLiked (product_id:number, userId: number) {
        return this.restService.getProductLiked(product_id, userId)
    }

    likeProduct(kind: "up" | "down", product_id:number) {
      this.restService.rateProduct(kind, product_id).subscribe({
        next: response => {
          this.snackbarService.openSnackBarSuccess("Product rated succesfully")
        }
      })
    }
}
