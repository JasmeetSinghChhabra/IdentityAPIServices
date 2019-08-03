import { Component, Input, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = '';
  constructor(private headerTitleService: HeaderTitleService) { }

  ngOnInit() {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

}
