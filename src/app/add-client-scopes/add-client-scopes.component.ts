
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { StatusRecieverService } from './../services/status-reciever.service';
import { HeaderTitleService } from './../services/header-title.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-client-scopes',
  templateUrl: './add-client-scopes.component.html',
  styleUrls: ['./add-client-scopes.component.scss']
})
export class AddClientScopesComponent implements OnInit {

  constructor(private statusRecieverService: StatusRecieverService,
              private formBuilder: FormBuilder, private http: HttpClient,  private headerTitleService: HeaderTitleService) {
  }
  registerForm: FormGroup;
    private getUrl = 'http://localhost:5000/allClientNames';
    private postUrl = 'http://localhost:5000/addClientScopes';
    response: any = [];

    ngOnInit() {
      this.http.get(this.getUrl).subscribe(data => {
        this.response = data;
        console.log(this.response);
        });
      this.headerTitleService.setTitle('Identity Api : Creating Client Scopes');

      this.registerForm = this.formBuilder.group({
       clientId: ['', Validators.required],
       allowedScopes: this.formBuilder.array([this.formBuilder.control(null)])
    });
  }
    add(): void {
    (this.registerForm.get('allowedScopes') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

    remove(index: number) {
    (this.registerForm.get('allowedScopes') as FormArray).removeAt(index);
  }

  getclientScopesFormControls(): AbstractControl[] {
    return (this.registerForm.get('allowedScopes') as FormArray).controls;
  }
  onReset() {
    this.registerForm.reset();
  }


  onSubmit(submitted: boolean) {
      if (submitted) {
      console.log(this.registerForm.value);
      const body = JSON.stringify(this.registerForm.value);
      console.log(body);

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
    }
  }
