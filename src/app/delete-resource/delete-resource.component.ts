import { StatusRecieverService } from './../services/status-reciever.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
    selector: 'app-delete-resource',
    templateUrl: './delete-resource.component.html',
    styleUrls: ['./delete-resource.component.scss']
  })

 export class DeleteResourceComponent implements OnInit {
    registerForm: FormGroup;
    deleteUrl = 'http://localhost:5000/api/apiresource';
    constructor(private statusRecieverService: StatusRecieverService,
                private formBuilder: FormBuilder, private http: HttpClient, private headerTitleService: HeaderTitleService) {
    }

    ngOnInit() {
      this.headerTitleService.setTitle('Delete Api Resource');
      this.registerForm = this.formBuilder.group({
        deleteClient: ['', Validators.required],
        });
    }
    // get name(): AbstractControl {
    //   return this.registerForm.get('deleteClient');}

    onSubmit() {
      const id: number = this.registerForm.value.deleteClient;
      console.log(this.deleteUrl + '/' + id);
      console.log(id + ' has been Deleted');
      let statusResponse = 'Deleted - Auto close alert!';
      this.http.delete(this.deleteUrl + '/' + id)
      .subscribe(
        (data) => {
          console.log(data);
          console.log('status ' + '201 ' + statusResponse);
          this.statusRecieverService.statusReciever(statusResponse, id);
          // this.registerForm.reset();
        },
        (error: Response) => {
          if (error.status === 200) {
            statusResponse = 'Already Exising Value!';
            console.log('error ' + error.status + ' ' + statusResponse);
          } else { statusResponse = 'Retry - Value Does not exist!';
                   console.log('error ' + error.status + ' ' + statusResponse); }
          this.statusRecieverService.statusReciever(statusResponse, id);
            });
    }
  }



