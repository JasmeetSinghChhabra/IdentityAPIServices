
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StatusRecieverService {
  constructor() { }
   statusReciever(statusResponse: string, body: any) {
    Swal.fire({
      title: statusResponse,
      html: body,
      onBeforeOpen: () => {
        Swal.enableButtons();
      },
      onClose: () => {
        Swal.showLoading();
      }
    }).then((result) => {
        console.log('Popup Closed');
   });
  }
}
