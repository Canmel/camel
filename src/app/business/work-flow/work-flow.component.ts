import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css']
})
export class WorkFlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').css('background-color', '#e5e6e6');
  }

}
