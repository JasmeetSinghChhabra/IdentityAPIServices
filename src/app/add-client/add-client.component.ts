import { StatusRecieverService } from './../services/status-reciever.service';
import { HeaderTitleService } from './../services/header-title.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
  registerForm: FormGroup;
  private getUrl = 'http://localhost:5000/parameters';
  private postUrl = 'http://localhost:5000/api/client/';
  data: any = {};
  submitted = false;

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
    this.submitted = true;
    console.log(this.registerForm.value);
    const body = JSON.stringify(this.registerForm.value);
    const view = JSON.stringify(this.registerForm.value, null, '\t');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let statusResponse = 'Created - Auto close alert!';
    this.http.post(this.postUrl, body , {headers})
    .subscribe(
      (data) => {
        console.log(data);
        console.log('status ' + '201 ' + statusResponse);
        this.statusRecieverService.statusReciever(statusResponse, view);
        // this.registerForm.reset();
      },
      (error: Response) => {
        if (error.status === 200) {
          statusResponse = 'Already Exising Value!';
          console.log('error ' + error.status + ' ' + statusResponse);
        } else { statusResponse = 'Retry! Fields Not Filled';
                 console.log('error ' + error.status + ' ' + statusResponse); }
        this.statusRecieverService.statusReciever(statusResponse, view);
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




