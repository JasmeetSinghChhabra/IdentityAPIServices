import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  title = new BehaviorSubject('Identity API');

  setTitle(title: string) {
    this.title.next(title);
  }
}
