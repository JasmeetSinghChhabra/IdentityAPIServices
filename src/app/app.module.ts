import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { ShellModule } from './shell/shell.module';

import { AddClientComponent } from './add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule, MatMenuModule,
  MatCardModule, MatNativeDateModule, MatDatepickerModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatFormFieldModule,
  MatButtonModule, MatDivider, MatDividerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoSecialCharDirective } from './no-secial-char.directive';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';
import { HomeComponent } from './home/home.component';
import { AddClientScopesComponent } from './add-client-scopes/add-client-scopes.component';
import { AddClientRedirectUrisComponent } from './add-client-redirect-uris/add-client-redirect-uris.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    AddClientComponent,
    HeaderComponent,
    AddResourceComponent,
    NoSecialCharDirective,
    DeleteClientComponent,
    DeleteResourceComponent,
    HomeComponent,
    AddClientScopesComponent,
    AddClientRedirectUrisComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    MatDividerModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatButtonModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    AccountModule,
    AppRoutingModule,
    ShellModule
  ],
  providers: [ MatDatepickerModule],
  bootstrap: [AppComponent],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AppModule { }
