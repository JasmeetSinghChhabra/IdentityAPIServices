import { StatusRecieverService } from './../services/status-reciever.service';
import { HeaderTitleService } from './../services/header-title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class AddClientComponent implements OnInit {
  registerForm: FormGroup;
  private getUrl = 'http://localhost:5000/parameters';
  private postUrl = 'http://localhost:5000/api/client/';
  data: any = {};
  bounce: any;

  constructor(private statusRecieverService: StatusRecieverService,
              private formBuilder: FormBuilder, private http: HttpClient,  private headerTitleService: HeaderTitleService) {
    this.getData();
    this.getScopes();
  }

  ngOnInit() {
    this.headerTitleService.setTitle('Identity Api : Creating Clients');
    this.registerForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientId: ['', Validators.required],
      enabled: ['true', Validators.required],
      description: ['', Validators.required],
      requireClientSecret: ['', Validators.required],
      grantTypes: ['', Validators.required],
      secrets : this.formBuilder.array([this.formBuilder.control('')]),
      // allowedScopes: this.formBuilder.array([this.formBuilder.control('0')]),
      allowedScopes : ['', Validators.required],
      redirectUris: this.formBuilder.array(['{{redirect}}']),
      postLogoutRedirectUris:  this.formBuilder.array(['{{logout}}'])
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    const body = JSON.stringify(this.registerForm.value);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let statusResponse = 'Created - Auto close alert!';
    this.http.post(this.postUrl, body , {headers})
    .subscribe(
      (data) => {
        console.log(data);
        console.log('status ' + '201 ' + statusResponse);
        this.statusRecieverService.statusReciever(statusResponse, body);
        this.registerForm.reset();
      },
      (error: Response) => {
        if (error.status === 200) {
          statusResponse = 'Already Exising Value - Auto close alert!';
          console.log('error ' + error.status + ' ' + statusResponse);
        } else { statusResponse = 'Retry - Auto close alert!';
                 console.log('error ' + error.status + ' ' + statusResponse); }
        this.statusRecieverService.statusReciever(statusResponse, body);
          });
    }

  getData() {
    const resp = this.http.get(this.getUrl);
    return resp;
    }
  getScopes() {
  this.getData().subscribe(data => {
    console.log(data);
    this.data = data;
  });
  }
}




