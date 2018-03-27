import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-boot-page',
  templateUrl: './boot-page.component.html',
  styleUrls: ['./boot-page.component.css']
})
export class BootPageComponent implements OnInit {

  currentPage = 4;
  page: number;

  pageChanged(event: any): void {
    this.page = event.page;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
