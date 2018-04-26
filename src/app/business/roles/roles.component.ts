import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpclientService} from '../../public/httpclient.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').css('background-color', '#e5e6e6');
  }

}
