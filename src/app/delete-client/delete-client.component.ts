import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderTitleService } from '../services/header-title.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent implements OnInit {
  registerForm: FormGroup;
  deleteUrl = 'http://localhost:5000/api/client';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private headerTitleService: HeaderTitleService) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('Delete Client');
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
    const resp = this.http.delete(this.deleteUrl + '/' + id)
    .subscribe((res: Response) => {
      console.log(res);
      let statusResponse: string;
      if (res.status === 201 || res.status === 200) {
        this.registerForm.reset();
        statusResponse = 'Deleted - Auto close alert!';
       } else {statusResponse = 'Retry - Auto close alert!'; }
      // Swal Start
      let timerInterval: NodeJS.Timer;
      Swal.fire({
         title: statusResponse,
         html: JSON.stringify(this.registerForm.value),
         timer: 7000,
         onBeforeOpen: () => {
           Swal.showLoading();
           timerInterval = setInterval(() => {
           }, 200);
         },
         onClose: () => {
           clearInterval(timerInterval);
         }
       }).then((result) => {
         if (
           // Read more about handling dismissals
           result.dismiss === Swal.DismissReason.timer
         ) {
           console.log('I was closed by the timer');
         }
       });
       // Swal Ends
     });
  }
}



