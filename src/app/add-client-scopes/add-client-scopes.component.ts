import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HeaderTitleService } from '../services/header-title.service';
import { StatusRecieverService } from '../services/status-reciever.service';

@Component({
  selector: 'app-add-client-scopes',
  templateUrl: './add-client-scopes.component.html',
  styleUrls: ['./add-client-scopes.component.scss']
})
export class AddClientScopesComponent implements OnInit {
  registerForm: FormGroup;
  private getUrl = 'http://localhost:5000/allClientNames';
  private postUrl = 'http://localhost:5000/api/client/';
  response: any = [];
  submitted = false;

  constructor(private statusRecieverService: StatusRecieverService,
              private formBuilder: FormBuilder, private http: HttpClient,  private headerTitleService: HeaderTitleService) {
  }

  ngOnInit() {
    this.http.get(this.getUrl).subscribe(data => {
      this.response = data;
      console.log(this.response);
      });

    this.headerTitleService.setTitle('Identity Api : Creating Client Scopes');
    this.registerForm = this.formBuilder.group({
     clientNames: ['', Validators.required],
     clientScopes: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    const body = JSON.stringify(this.registerForm.value);
    console.log(body);
  }
}
