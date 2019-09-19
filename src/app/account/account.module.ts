import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { AccountRoutingModule } from './account.routing-module';
import { AuthService } from '../core/authentication/auth.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
