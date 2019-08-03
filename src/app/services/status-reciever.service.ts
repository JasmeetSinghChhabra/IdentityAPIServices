import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class StatusRecieverService {

  constructor() { }
   statusReciever(statusResponse: string, body: any) {
    let timerInterval;
    Swal.fire({
      title: statusResponse,
      html: body,
      timer: 2500,
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
        result.dismiss === Swal.DismissReason.timer) {
        console.log('Popup Closed by the Timer');
      }
    });
  }
}
