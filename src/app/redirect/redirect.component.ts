import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.login();
  }

}
