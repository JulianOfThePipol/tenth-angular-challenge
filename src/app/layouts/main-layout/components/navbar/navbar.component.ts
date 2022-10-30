import { User } from './../../../../models/rest.models';
import { Router } from '@angular/router';
import { TokenService } from './../../../../core/services/token.service';
import { Animations } from './../../../../../assets/animations/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [Animations.topRightScale],
})
export class NavbarComponent implements OnInit {
  userInfoOpened = false;
  userData: User | null = null;
  @Input() itemsAmount = 0;
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit (): void {
    if (localStorage.getItem('user')) {
      this.userData = JSON.parse(localStorage.getItem('user') as string);
    }
  }

  logOut () {
    this.tokenService.deleteToken();
    localStorage.removeItem('user');
    this.userData = null;
  }

  toggleUserInfo () {
    this.userInfoOpened = !this.userInfoOpened;
  }

  goToLogin () {
    this.router.navigate(['/credentials']);
  }

  goToCart () {
    this.router.navigate(['/main/cart']);
  }

  goToMain () {
    this.router.navigate(['/main'])
  }
}
