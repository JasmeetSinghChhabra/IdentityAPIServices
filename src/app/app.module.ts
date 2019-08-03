import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule, MatMenuModule, MatCardModule, MatNativeDateModule, MatDatepickerModule, MatProgressSpinnerModule, MatProgressBarModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoSecialCharDirective } from './no-secial-char.directive';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DeleteResourceComponent } from './delete-resource/delete-resource.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    HeaderComponent,
    AddResourceComponent,
    NoSecialCharDirective,
    DeleteClientComponent,
    DeleteResourceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatButtonModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule],
  bootstrap: [AppComponent],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AppModule { }
