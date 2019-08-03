import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HeaderTitleService } from '../services/header-title.service';
import { StatusRecieverService } from '../services/status-reciever.service';



@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})


export class AddResourceComponent implements OnInit {
  registerForm: FormGroup;
  postUrl = 'http://localhost:5000/api/apiresource';
  data: any = {};
  constructor(private formBuilder: FormBuilder, private http: HttpClient,
              private headerTitleService: HeaderTitleService,
              private statusRecieverService: StatusRecieverService) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('Identity Api : Creating API Response');
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit() {
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
}


