import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { SnackbarService } from './../../shared/services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ErrorHandlerService implements ErrorHandler { 
 
  constructor(
    private snackBar:SnackbarService,
    private tokenService: TokenService,
    private router: Router
    ) { } 
 
  handleError(error: any): void { 
    if (error instanceof HttpErrorResponse && error.status === 401){
      if(error.url?.includes('login')) {
        this.snackBar.openSnackBarWarning('Incorrect password or email')
      } else {
        this.snackBar.openSnackBarWarning('Your credentials have expired. Please log in again')
        this.tokenService.deleteToken()
        this.router.navigate(['/credentials'])
      }
    } else {
      this.snackBar.openSnackBarWarning('An error has ocurred, please try again')
      console.log(error)
    }
  } 
} 