import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').css('background-color', '#e5e6e6');
  }

}
