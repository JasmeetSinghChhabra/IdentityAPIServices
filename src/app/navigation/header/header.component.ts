import { HeaderTitleService } from 'src/app/services/header-title.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = '';
  name: string;
  isAuthenticated: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService, private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
      this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
      this.name = this.authService.name;
    });
  }
  signout() {
    this.authService.signout();
  }
  login() {
    this.authService.login();
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
